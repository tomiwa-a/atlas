import React from 'react';

const PricingTable: React.FC = () => {
  const features = [
    { name: 'Credits per month', basic: '100', pro: '500', enterprise: 'Unlimited' },
    { name: 'Text-only content', basic: true, pro: true, enterprise: true },
    { name: 'Graphics included', basic: false, pro: true, enterprise: true },
    { name: 'AI tutoring quality', basic: 'Basic', pro: 'Advanced', enterprise: 'Premium' },
    { name: 'User accounts', basic: '1', pro: '5', enterprise: 'Unlimited' },
    { name: 'Support', basic: 'Email', pro: 'Priority', enterprise: 'Dedicated' },
    { name: 'API access', basic: false, pro: false, enterprise: true },
    { name: 'Custom integrations', basic: false, pro: false, enterprise: true }
  ];

  return (
    <section className="py-16 bg-neutral">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Compare Plans</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-secondary rounded-lg overflow-hidden">
            <thead className="bg-primary text-secondary">
              <tr>
                <th className="py-4 px-6 text-left">Features</th>
                <th className="py-4 px-6 text-center">Basic</th>
                <th className="py-4 px-6 text-center">Pro</th>
                <th className="py-4 px-6 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-secondary' : 'bg-neutral'}>
                  <td className="py-4 px-6 font-semibold">{feature.name}</td>
                  <td className="py-4 px-6 text-center">
                    {typeof feature.basic === 'boolean' ? (
                      feature.basic ? (
                        <svg className="w-5 h-5 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <span className="text-neutral">—</span>
                      )
                    ) : (
                      feature.basic
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof feature.pro === 'boolean' ? (
                      feature.pro ? (
                        <svg className="w-5 h-5 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <span className="text-neutral">—</span>
                      )
                    ) : (
                      feature.pro
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof feature.enterprise === 'boolean' ? (
                      feature.enterprise ? (
                        <svg className="w-5 h-5 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <span className="text-neutral">—</span>
                      )
                    ) : (
                      feature.enterprise
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;