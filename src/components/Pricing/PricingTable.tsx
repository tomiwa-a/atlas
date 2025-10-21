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
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Compare Plans</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <thead className="bg-black text-white">
              <tr>
                <th className="py-6 px-6 text-left text-lg font-bold border-r border-gray-600">Features</th>
                <th className="py-6 px-6 text-center text-lg font-bold border-r border-gray-600">Basic</th>
                <th className="py-6 px-6 text-center text-lg font-bold border-r border-gray-600">Pro</th>
                <th className="py-6 px-6 text-center text-lg font-bold">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-4 px-6 font-semibold text-base border-r border-gray-200">{feature.name}</td>
                  <td className="py-4 px-6 text-center border-r border-gray-200">
                    {typeof feature.basic === 'boolean' ? (
                      feature.basic ? (
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )
                    ) : (
                      <span className="text-base font-medium">{feature.basic}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center border-r border-gray-200">
                    {typeof feature.pro === 'boolean' ? (
                      feature.pro ? (
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )
                    ) : (
                      <span className="text-base font-medium">{feature.pro}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof feature.enterprise === 'boolean' ? (
                      feature.enterprise ? (
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )
                    ) : (
                      <span className="text-base font-medium">{feature.enterprise}</span>
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