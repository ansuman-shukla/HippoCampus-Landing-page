-- HippoCampus Authentication and Core Tables Migration
-- Location: supabase/migrations/20241216120000_hippocampus_auth.sql

-- 1. Types
CREATE TYPE public.user_role AS ENUM ('admin', 'premium', 'free');
CREATE TYPE public.bookmark_type AS ENUM ('webpage', 'note', 'document');

-- 2. Core Tables
-- User profiles table (intermediary for auth relationships)
CREATE TABLE public.user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    role public.user_role DEFAULT 'free'::public.user_role,
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Bookmarks table for saved content
CREATE TABLE public.bookmarks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    url TEXT,
    content TEXT,
    notes TEXT,
    type public.bookmark_type DEFAULT 'webpage'::public.bookmark_type,
    tags TEXT[],
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Notes table for standalone notes
CREATE TABLE public.notes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    tags TEXT[],
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Search history for analytics
CREATE TABLE public.search_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    query TEXT NOT NULL,
    results_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 3. Essential Indexes
CREATE INDEX idx_user_profiles_email ON public.user_profiles(email);
CREATE INDEX idx_bookmarks_user_id ON public.bookmarks(user_id);
CREATE INDEX idx_bookmarks_type ON public.bookmarks(type);
CREATE INDEX idx_bookmarks_created_at ON public.bookmarks(created_at);
CREATE INDEX idx_notes_user_id ON public.notes(user_id);
CREATE INDEX idx_notes_created_at ON public.notes(created_at);
CREATE INDEX idx_search_history_user_id ON public.search_history(user_id);

-- 4. RLS Setup
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.search_history ENABLE ROW LEVEL SECURITY;

-- 5. Helper Functions
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
SELECT EXISTS (
    SELECT 1 FROM public.user_profiles up
    WHERE up.id = auth.uid() AND up.role = 'admin'::public.user_role
)
$$;

CREATE OR REPLACE FUNCTION public.owns_bookmark(bookmark_uuid UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
SELECT EXISTS (
    SELECT 1 FROM public.bookmarks b
    WHERE b.id = bookmark_uuid AND b.user_id = auth.uid()
)
$$;

CREATE OR REPLACE FUNCTION public.owns_note(note_uuid UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
SELECT EXISTS (
    SELECT 1 FROM public.notes n
    WHERE n.id = note_uuid AND n.user_id = auth.uid()
)
$$;

-- Function for automatic profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
SECURITY DEFINER
LANGUAGE plpgsql
AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, full_name, role)
  VALUES (
    NEW.id, 
    NEW.email, 
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
    COALESCE((NEW.raw_user_meta_data->>'role')::public.user_role, 'free'::public.user_role)
  );  
  RETURN NEW;
END;
$$;

-- Trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 6. RLS Policies
CREATE POLICY "users_own_profile" ON public.user_profiles FOR ALL
USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

CREATE POLICY "users_manage_bookmarks" ON public.bookmarks FOR ALL
USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "users_manage_notes" ON public.notes FOR ALL
USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "users_own_search_history" ON public.search_history FOR ALL
USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- 7. Mock Data
DO $$
DECLARE
    demo_user_uuid UUID := gen_random_uuid();
    premium_user_uuid UUID := gen_random_uuid();
    bookmark1_uuid UUID := gen_random_uuid();
    bookmark2_uuid UUID := gen_random_uuid();
    note1_uuid UUID := gen_random_uuid();
BEGIN
    -- Create auth users with required fields
    INSERT INTO auth.users (
        id, instance_id, aud, role, email, encrypted_password, email_confirmed_at,
        created_at, updated_at, raw_user_meta_data, raw_app_meta_data,
        is_sso_user, is_anonymous, confirmation_token, confirmation_sent_at,
        recovery_token, recovery_sent_at, email_change_token_new, email_change,
        email_change_sent_at, email_change_token_current, email_change_confirm_status,
        reauthentication_token, reauthentication_sent_at, phone, phone_change,
        phone_change_token, phone_change_sent_at
    ) VALUES
        (demo_user_uuid, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
         'demo@hippocampus.ai', crypt('password123', gen_salt('bf', 10)), now(), now(), now(),
         '{"full_name": "Demo User"}'::jsonb, '{"provider": "email", "providers": ["email"]}'::jsonb,
         false, false, '', null, '', null, '', '', null, '', 0, '', null, null, '', '', null),
        (premium_user_uuid, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
         'premium@hippocampus.ai', crypt('password123', gen_salt('bf', 10)), now(), now(), now(),
         '{"full_name": "Premium User", "role": "premium"}'::jsonb, '{"provider": "email", "providers": ["email"]}'::jsonb,
         false, false, '', null, '', null, '', '', null, '', 0, '', null, null, '', '', null);

    -- Create sample bookmarks
    INSERT INTO public.bookmarks (id, user_id, title, url, content, notes, type, tags) VALUES
        (bookmark1_uuid, demo_user_uuid, 
         'The Ultimate Guide to Remote Work Productivity',
         'https://example.com/remote-work-guide',
         'Comprehensive guide covering productivity tips, tools, and best practices for remote work. Includes sections on time management, communication, and work-life balance.',
         'Great insights on async communication and meeting fatigue',
         'webpage'::public.bookmark_type,
         ARRAY['productivity', 'remote work', 'tips']),
        (bookmark2_uuid, demo_user_uuid,
         'React Performance Optimization Techniques',
         'https://example.com/react-performance',
         'Deep dive into React performance optimization including memoization, code splitting, and virtual DOM optimizations.',
         'Bookmark for the React project - check useMemo examples',
         'webpage'::public.bookmark_type,
         ARRAY['react', 'performance', 'javascript', 'development']);

    -- Create sample notes
    INSERT INTO public.notes (id, user_id, title, content, tags) VALUES
        (note1_uuid, demo_user_uuid,
         'AI Research Ideas',
         'Ideas for my next research project:\n\n1. Semantic search improvements\n2. Memory consolidation algorithms\n3. Personalized content recommendation\n4. Cross-modal content understanding\n\nFocus on practical applications for knowledge workers.',
         ARRAY['ai', 'research', 'ideas', 'semantic search']);

    -- Create sample search history
    INSERT INTO public.search_history (user_id, query, results_count) VALUES
        (demo_user_uuid, 'productivity tips for remote work', 5),
        (demo_user_uuid, 'React performance optimization', 3),
        (demo_user_uuid, 'AI research papers 2024', 8),
        (premium_user_uuid, 'knowledge management systems', 12);

EXCEPTION
    WHEN foreign_key_violation THEN
        RAISE NOTICE 'Foreign key error: %', SQLERRM;
    WHEN unique_violation THEN
        RAISE NOTICE 'Unique constraint error: %', SQLERRM;
    WHEN OTHERS THEN
        RAISE NOTICE 'Unexpected error: %', SQLERRM;
END $$;