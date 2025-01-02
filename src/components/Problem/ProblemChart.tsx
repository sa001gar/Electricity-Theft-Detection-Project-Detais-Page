import React from 'react';

const data = [
  { region: 'Asia', percentage: 65 },
  { region: 'Africa', percentage: 45 },
  { region: 'South America', percentage: 35 },
  { region: 'Europe', percentage: 15 },
  { region: 'North America', percentage: 10 },
];

export default function ProblemChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="font-mono text-lg font-bold mb-6">Global Electricity Theft by Region</h3>
      <div className="space-y-4">
        {data.map(({ region, percentage }) => (
          <div key={region} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{region}</span>
              <span className="font-mono">{percentage}%</span>
            </div>
            <div className="h-2 bg-yellow-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-600 rounded-full transition-all duration-1000"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}