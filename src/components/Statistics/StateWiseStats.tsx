import React from 'react';
import Table from '../common/Table/Table';

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

const columns = [
  { key: 'state', header: 'State' },
  { 
    key: 'percentage', 
    header: 'Loss %', 
    align: 'right' as const,
    className: 'text-emerald-600'
  },
  { 
    key: 'formattedCost', 
    header: 'Annual Cost (Cr)', 
    align: 'right' as const
  }
];

export default function StateWiseStats() {
  const formattedData = stateData.map(item => ({
    ...item,
    formattedCost: `₹${item.cost}`
  }));

  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      <h3 className="font-mono text-xl font-bold mb-6">State-wise Electricity Loss</h3>
      <Table columns={columns} data={formattedData} />
    </div>
  );
}