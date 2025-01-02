import React from 'react';

const globalData = [
  {
    year: 2023,
    countries: [
      { rank: 1, country: 'India', loss: 17.2 },
      { rank: 2, country: 'Brazil', loss: 15.8 },
      { rank: 3, country: 'Russia', loss: 14.2 },
      { rank: 4, country: 'Mexico', loss: 13.7 },
      { rank: 5, country: 'China', loss: 12.9 }
    ]
  },
  {
    year: 2022,
    countries: [
      { rank: 1, country: 'India', loss: 18.1 },
      { rank: 2, country: 'Brazil', loss: 16.2 },
      { rank: 3, country: 'Mexico', loss: 14.8 },
      { rank: 4, country: 'Russia', loss: 14.5 },
      { rank: 5, country: 'China', loss: 13.4 }
    ]
  }
];

export default function GlobalRankings() {
  const [selectedYear, setSelectedYear] = React.useState(2023);
  const yearData = globalData.find(d => d.year === selectedYear)?.countries || [];

  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h3 className="font-mono text-xl font-bold">Global Rankings</h3>
        <div className="flex gap-2 w-full sm:w-auto">
          {globalData.map(({ year }) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg font-mono text-sm transition-colors ${
                selectedYear === year
                  ? 'bg-emerald-600 text-white'
                  : 'bg-yellow-50 hover:bg-yellow-100'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="shadow-sm overflow-hidden">
            <table className="min-w-full border-separate border-spacing-0">
              <thead className="bg-yellow-50">
                <tr>
                  <th className="sticky left-0 bg-yellow-50 px-4 py-3 text-left font-mono text-sm border-b border-yellow-100">
                    Rank
                  </th>
                  <th className="px-4 py-3 text-left font-mono text-sm border-b border-yellow-100">
                    Country
                  </th>
                  <th className="px-4 py-3 text-right font-mono text-sm border-b border-yellow-100">
                    Loss %
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {yearData.map((item) => (
                  <tr 
                    key={item.country} 
                    className={`hover:bg-yellow-50 transition-colors ${
                      item.country === 'India' ? 'bg-yellow-50' : ''
                    }`}
                  >
                    <td className="sticky left-0 bg-inherit px-4 py-3 font-mono text-sm border-b border-yellow-100">
                      {item.rank}
                    </td>
                    <td className="px-4 py-3 border-b border-yellow-100">
                      {item.country}
                      {item.country === 'India' && (
                        <span className="ml-2 text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                          Current
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-sm text-emerald-600 border-b border-yellow-100">
                      {item.loss}%
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