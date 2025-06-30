import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [showFeatureComparison, setShowFeatureComparison] = useState(false);

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for getting started',
      features: [
        'Save up to 100 items per month',
        'Basic semantic search',
        'Browser extension',
        'Single device sync',
        'Email support'
      ],
      limitations: [
        'Limited to 100 saves/month',
        'Basic search only',
        'No team features'
      ],
      cta: 'Start Free',
      popular: false,
      color: 'from-text-secondary to-text-tertiary'
    },
    {
      id: 'pro',
      name: 'Professional',
      price: { monthly: 12, yearly: 120 },
      description: 'For serious knowledge workers',
      features: [
        'Unlimited saves and searches',
        'Advanced AI semantic search',
        'Cross-device sync',
        'PDF and document analysis',
        'Smart tagging and categorization',
        'Export and backup options',
        'Priority support'
      ],
      limitations: [],
      cta: 'Start Free Trial',
      popular: true,
      color: 'from-primary to-secondary'
    },
    {
      id: 'team',
      name: 'Team',
      price: { monthly: 25, yearly: 250 },
      description: 'Collaborative research teams',
      features: [
        'Everything in Professional',
        'Team workspaces',
        'Shared knowledge bases',
        'Advanced collaboration tools',
        'Admin dashboard',
        'SSO integration',
        'Custom integrations',
        'Dedicated support'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
      color: 'from-accent to-warning'
    }
  ];

  const allFeatures = [
    {
      category: 'Core Features',
      items: [
        { name: 'Monthly saves limit', free: '100', pro: 'Unlimited', team: 'Unlimited' },
        { name: 'Semantic search', free: 'Basic', pro: 'Advanced AI', team: 'Advanced AI' },
        { name: 'Browser extension', free: '✓', pro: '✓', team: '✓' },
        { name: 'Cross-device sync', free: '1 device', pro: 'All devices', team: 'All devices' },
        { name: 'PDF analysis', free: '✗', pro: '✓', team: '✓' }
      ]
    },
    {
      category: 'Collaboration',
      items: [
        { name: 'Team workspaces', free: '✗', pro: '✗', team: '✓' },
        { name: 'Shared knowledge bases', free: '✗', pro: '✗', team: '✓' },
        { name: 'Real-time collaboration', free: '✗', pro: '✗', team: '✓' },
        { name: 'Admin controls', free: '✗', pro: '✗', team: '✓' }
      ]
    },
    {
      category: 'Support & Security',
      items: [
        { name: 'Support level', free: 'Email', pro: 'Priority', team: 'Dedicated' },
        { name: 'SSO integration', free: '✗', pro: '✗', team: '✓' },
        { name: 'Custom integrations', free: '✗', pro: '✗', team: '✓' },
        { name: 'SLA guarantee', free: '✗', pro: '✗', team: '99.9%' }
      ]
    }
  ];

  const getPrice = (plan) => {
    const price = plan.price[billingCycle];
    if (price === 0) return 'Free';
    return billingCycle === 'yearly' ? `$${price}/year` : `$${price}/month`;
  };

  const getSavings = (plan) => {
    if (plan.price.yearly === 0) return null;
    const monthlyCost = plan.price.monthly * 12;
    const savings = monthlyCost - plan.price.yearly;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return { amount: savings, percentage };
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-background-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-text-primary mb-6">
            Choose Your
            <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Knowledge Plan
            </span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto font-inter leading-relaxed mb-8">
            Start free and upgrade as your knowledge base grows. All plans include our core AI-powered search.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center glassmorphism p-2 rounded-full">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-inter font-medium transition-all duration-300 ${
                billingCycle === 'monthly' ?'bg-primary text-white shadow-primary' :'text-text-secondary hover:text-primary'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full font-inter font-medium transition-all duration-300 relative ${
                billingCycle === 'yearly' ?'bg-primary text-white shadow-primary' :'text-text-secondary hover:text-primary'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const savings = getSavings(plan);
            return (
              <div
                key={plan.id}
                className={`relative glassmorphism p-8 rounded-3xl transition-all duration-300 ${
                  plan.popular 
                    ? 'transform scale-105 shadow-2xl border-2 border-primary' 
                    : 'hover:transform hover:scale-102'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-full">
                      <span className="text-white text-sm font-poppins font-semibold">
                        Most Popular
                      </span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon 
                      name={plan.id === 'free' ? 'Zap' : plan.id === 'pro' ? 'Brain' : 'Users'} 
                      size={32} 
                      color="white" 
                    />
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-text-primary mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-text-secondary font-inter mb-4">
                    {plan.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <div className="text-4xl font-poppins font-bold text-text-primary">
                      {getPrice(plan)}
                    </div>
                    {savings && billingCycle === 'yearly' && (
                      <div className="text-sm text-success font-inter">
                        Save ${savings.amount} ({savings.percentage}%) annually
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-success-100 rounded-full flex items-center justify-center mt-0.5">
                        <Icon name="Check" size={12} color="var(--color-success)" />
                      </div>
                      <span className="text-text-secondary font-inter text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {/* Limitations */}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-start space-x-3 opacity-60">
                      <div className="w-5 h-5 bg-error-100 rounded-full flex items-center justify-center mt-0.5">
                        <Icon name="X" size={12} color="var(--color-error)" />
                      </div>
                      <span className="text-text-secondary font-inter text-sm">{limitation}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  className={plan.popular ? "primary-shadow hover:cta-shadow" : ""}
                >
                  {plan.cta}
                </Button>

                {/* Trial Info */}
                {plan.id !== 'free' && (
                  <p className="text-xs text-text-secondary text-center mt-3 font-inter">
                    14-day free trial • No credit card required
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Toggle */}
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            size="md"
            iconName={showFeatureComparison ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            onClick={() => setShowFeatureComparison(!showFeatureComparison)}
          >
            {showFeatureComparison ? "Hide" : "Compare"} All Features
          </Button>
        </div>

        {/* Feature Comparison Table */}
        {showFeatureComparison && (
          <div className="glassmorphism p-8 rounded-3xl overflow-hidden animate-fade-in">
            <h3 className="text-2xl font-poppins font-bold text-text-primary text-center mb-8">
              Detailed Feature Comparison
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-poppins font-semibold text-text-primary">
                      Features
                    </th>
                    {plans.map((plan) => (
                      <th key={plan.id} className="text-center py-4 px-4 font-poppins font-semibold text-text-primary">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map((category, categoryIndex) => (
                    <React.Fragment key={categoryIndex}>
                      <tr>
                        <td colSpan={4} className="py-4 px-4">
                          <div className="font-poppins font-semibold text-primary text-sm">
                            {category.category}
                          </div>
                        </td>
                      </tr>
                      {category.items.map((item, itemIndex) => (
                        <tr key={itemIndex} className="border-b border-border border-opacity-30">
                          <td className="py-3 px-4 font-inter text-text-secondary">
                            {item.name}
                          </td>
                          <td className="py-3 px-4 text-center font-inter text-text-primary">
                            {item.free}
                          </td>
                          <td className="py-3 px-4 text-center font-inter text-text-primary">
                            {item.pro}
                          </td>
                          <td className="py-3 px-4 text-center font-inter text-text-primary">
                            {item.team}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center glassmorphism p-4 rounded-xl">
            <Icon name="Shield" size={24} color="var(--color-success)" className="mx-auto mb-2" />
            <div className="text-sm font-inter text-text-secondary">SOC 2 Compliant</div>
          </div>
          <div className="text-center glassmorphism p-4 rounded-xl">
            <Icon name="Lock" size={24} color="var(--color-success)" className="mx-auto mb-2" />
            <div className="text-sm font-inter text-text-secondary">GDPR Ready</div>
          </div>
          <div className="text-center glassmorphism p-4 rounded-xl">
            <Icon name="Database" size={24} color="var(--color-success)" className="mx-auto mb-2" />
            <div className="text-sm font-inter text-text-secondary">256-bit Encryption</div>
          </div>
          <div className="text-center glassmorphism p-4 rounded-xl">
            <Icon name="Clock" size={24} color="var(--color-success)" className="mx-auto mb-2" />
            <div className="text-sm font-inter text-text-secondary">99.9% Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;