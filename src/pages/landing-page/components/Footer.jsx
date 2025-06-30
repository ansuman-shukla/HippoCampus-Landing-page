import React from 'react';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#benefits" },
        { name: "Pricing", href: "#pricing" },
        { name: "Browser Extension", href: "#" },
        { name: "API Documentation", href: "#" },
        { name: "Integrations", href: "#" },
        { name: "Roadmap", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Research Papers", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Community", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press Kit", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Partners", href: "#" },
        { name: "Investors", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "GDPR", href: "#" },
        { name: "Security", href: "#" },
        { name: "Compliance", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: "Twitter", href: "https://twitter.com/hippocampusai" },
    { name: "LinkedIn", icon: "Linkedin", href: "https://linkedin.com/company/hippocampusai" },
    { name: "GitHub", icon: "Github", href: "https://github.com/hippocampusai" },
    { name: "Discord", icon: "MessageSquare", href: "https://discord.gg/hippocampusai" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-background-secondary to-text-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full" />
        <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white rounded-full" />
        <div className="absolute bottom-40 right-1/3 w-24 h-24 border border-white rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Icon name="Brain" size={24} color="white" strokeWidth={2} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Sparkles" size={10} color="white" strokeWidth={2} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-bold">HippoCampus</h3>
                  <p className="text-sm opacity-80 font-inter">AI Memory Assistant</p>
                </div>
              </div>
              
              <p className="text-white opacity-80 font-inter leading-relaxed mb-6 max-w-sm">
                Your AI-powered digital hippocampus that captures, organizes, and instantly retrieves any web content using natural language search.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glassmorphism rounded-lg flex items-center justify-center glassmorphism-hover transition-glassmorphism"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon name={social.icon} size={18} color="white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-poppins font-semibold text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-white opacity-80 hover:opacity-100 transition-opacity font-inter text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-white border-opacity-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-poppins font-bold text-white mb-2">
                Stay Updated
              </h4>
              <p className="text-white opacity-80 font-inter">
                Get the latest updates on new features and research insights.
              </p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:border-primary font-inter"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-poppins font-medium text-white hover:shadow-primary transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white border-opacity-20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white opacity-80 font-inter text-sm">
              © {currentYear} HippoCampus AI. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-white opacity-80 font-inter">All systems operational</span>
                </div>
              </div>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 glassmorphism rounded-lg flex items-center justify-center glassmorphism-hover transition-glassmorphism"
                aria-label="Scroll to top"
              >
                <Icon name="ArrowUp" size={18} color="white" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="py-6 border-t border-white border-opacity-20">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} color="white" />
              <span className="text-white font-inter text-xs">SOC 2 Type II</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Lock" size={16} color="white" />
              <span className="text-white font-inter text-xs">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Database" size={16} color="white" />
              <span className="text-white font-inter text-xs">256-bit SSL</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} color="white" />
              <span className="text-white font-inter text-xs">ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;