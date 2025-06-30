import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionShowcase from './components/SolutionShowcase';
import BenefitsGrid from './components/BenefitsGrid';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Problem Agitation */}
        <ProblemSection />

        {/* Solution Showcase */}
        <SolutionShowcase />

        {/* Benefits Grid */}
        <BenefitsGrid />

        {/* Testimonials */}
        <TestimonialsCarousel />

        {/* Pricing */}
        <PricingSection />

        {/* FAQ */}
        <FAQSection />

        {/* Final CTA */}
        <FinalCTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;