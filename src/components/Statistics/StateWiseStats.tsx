import React from 'react';

const stateData = [
  { state: 'Maharashtra', percentage: 14.2, cost: 2800 },
  { state: 'Uttar Pradesh', percentage: 21.8, cost: 3400 },
  { state: 'Tamil Nadu', percentage: 13.5, cost: 2100 },
  { state: 'Gujarat', percentage: 11.2, cost: 1900 },
  { state: 'Karnataka', percentage: 12.8, cost: 2300 },
  { state: 'Bihar', percentage: 28.5, cost: 3900 },
  { state: 'West Bengal', percentage: 19.2, cost: 2700 },
  { state: 'Rajasthan', percentage: 17.8, cost: 2500 }
];

export default function StateWiseStats() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      <h3 className="font-mono text-xl font-bold mb-6">State-wise Electricity Loss</h3>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="shadow-sm overflow-hidden">
            <table className="min-w-full border-separate border-spacing-0">
              <thead className="bg-yellow-50">
                <tr>
                  <th className="sticky left-0 bg-yellow-50 px-4 py-3 text-left font-mono text-sm border-b border-yellow-100">
                    State
                  </th>
                  <th className="px-4 py-3 text-right font-mono text-sm border-b border-yellow-100">
                    Loss %
                  </th>
                  <th className="px-4 py-3 text-right font-mono text-sm border-b border-yellow-100 whitespace-nowrap">
                    Annual Cost (Cr)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {stateData.map((item) => (
                  <tr key={item.state} className="hover:bg-yellow-50 transition-colors">
                    <td className="sticky left-0 bg-inherit px-4 py-3 text-sm border-b border-yellow-100">
                      {item.state}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-sm text-emerald-600 border-b border-yellow-100">
                      {item.percentage}%
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-sm border-b border-yellow-100">
                      ₹{item.cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}