import React, { useState } from 'react';
import Table from '../common/Table/Table';

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

const columns = [
  { key: 'rank', header: 'Rank' },
  { 
    key: 'countryDisplay', 
    header: 'Country'
  },
  { 
    key: 'formattedLoss', 
    header: 'Loss %', 
    align: 'right' as const,
    className: 'text-emerald-600'
  }
];

export default function GlobalRankings() {
  const [selectedYear, setSelectedYear] = useState(2023);
  const yearData = globalData.find(d => d.year === selectedYear)?.countries || [];

  const formattedData = yearData.map(item => ({
    ...item,
    countryDisplay: (
      <div className="flex items-center gap-2">
        {item.country}
        {item.country === 'India' && (
          <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
            Current
          </span>
        )}
      </div>
    ),
    formattedLoss: `${item.loss}%`
  }));

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
      <Table 
        columns={columns} 
        data={formattedData}
        highlightRow={(row) => row.country === 'India'}
      />
    </div>
  );
}