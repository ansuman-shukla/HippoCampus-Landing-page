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
        'Basic search functionality',
        'Browser extension',
        'Single device sync',
        'Email support'
      ],
      limitations: [
        'Basic search only',
        'Limited to single device',
        'No team features'
      ],
      cta: 'Start Free',
      popular: false,
      color: 'from-text-secondary to-text-tertiary'
    },
    {
      id: 'pro',
      name: 'Standard',
      price: { monthly: 12, yearly: 120 },
      description: 'For serious knowledge workers',
      features: [
        'Everything in Free',
        'Advanced AI semantic search',
        'Cross-device sync',
        'AI content summarization',
        'Dashboard & AI support',
        'PDF and document analysis',
        'Export and backup options'
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
        'Everything in Standard',
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
        { name: 'Search functionality', free: 'Basic', pro: 'Advanced AI semantic', team: 'Advanced AI semantic' },
        { name: 'Browser extension', free: '✓', pro: '✓', team: '✓' },
        { name: 'Device sync', free: 'Single device', pro: 'Cross-device', team: 'Cross-device' },
        { name: 'AI content summarization', free: '✗', pro: '✓', team: '✓' },
        { name: 'PDF analysis', free: '✗', pro: '✓', team: '✓' }
      ]
    },
    {
      category: 'AI & Analytics',
      items: [
        { name: 'Dashboard & AI support', free: '✗', pro: '✓', team: '✓' },
        { name: 'Export and backup', free: '✗', pro: '✓', team: '✓' },
        { name: 'Advanced collaboration', free: '✗', pro: '✗', team: '✓' },
        { name: 'Custom integrations', free: '✗', pro: '✗', team: '✓' }
      ]
    },
    {
      category: 'Team & Enterprise',
      items: [
        { name: 'Team workspaces', free: '✗', pro: '✗', team: '✓' },
        { name: 'Shared knowledge bases', free: '✗', pro: '✗', team: '✓' },
        { name: 'Admin dashboard', free: '✗', pro: '✗', team: '✓' },
        { name: 'SSO integration', free: '✗', pro: '✗', team: '✓' }
      ]
    },
    {
      category: 'Support',
      items: [
        { name: 'Support level', free: 'Email', pro: 'Dashboard & AI', team: 'Dedicated' },
        { name: 'Response time', free: '48 hours', pro: '24 hours', team: '4 hours' }
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
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-0.5">
                        <Icon name="Check" size={12} color="black" />
                      </div>
                      <span className="text-text-secondary font-inter text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {/* Limitations */}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-start space-x-3 opacity-60">
                      <div className="w-5 h-5 bg-error rounded-full flex items-center justify-center mt-0.5">
                        <Icon name="X" size={12} color="white" />
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
      </div>
    </section>
  );
};

export default PricingSection;