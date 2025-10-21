import React from 'react';

const PricingCards: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$9.99/month',
      credits: '100 credits',
      features: [
        'Text-only content creation',
        'Basic AI tutoring',
        'Email support',
        '1 user account'
      ]
    },
    {
      name: 'Pro',
      price: '$19.99/month',
      credits: '500 credits',
      features: [
        'Text + graphics content',
        'Advanced AI features',
        'Priority support',
        'Up to 5 user accounts',
        'Custom learning paths'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Contact Us',
      credits: 'Unlimited credits',
      features: [
        'All Pro features',
        'Unlimited graphics',
        'Dedicated support',
        'Unlimited user accounts',
        'API access',
        'Custom integrations'
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-secondary p-8 rounded-lg shadow-lg border ${plan.popular ? 'border-primary' : 'border-neutral'} relative flex flex-col h-full`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-secondary px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-3xl font-bold text-primary mb-2">{plan.price}</p>
                <p className="text-lg mb-6">{plan.credits}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <button className={`w-full py-3 px-6 rounded-full font-semibold transition ${
                  plan.popular
                    ? 'bg-primary text-secondary hover:opacity-90'
                    : 'bg-neutral text-primary hover:bg-primary hover:text-secondary'
                }`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;