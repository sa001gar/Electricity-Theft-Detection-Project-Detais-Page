import React from 'react';
import { TrendingDown, Battery, DollarSign, ShieldCheck } from 'lucide-react';

const metrics = [
  {
    icon: TrendingDown,
    title: 'Theft Reduction',
    value: '85%',
    description: 'Decrease in electricity theft cases'
  },
  {
    icon: Battery,
    title: 'Grid Stability',
    value: '94%',
    description: 'Improvement in power distribution'
  },
  {
    icon: DollarSign,
    title: 'Cost Savings',
    value: '₹4.2B',
    description: 'Annual projected savings'
  },
  {
    icon: ShieldCheck,
    title: 'Detection Rate',
    value: '99.9%',
    description: 'Accuracy in anomaly detection'
  }
];

export default function ImpactMetrics() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map(({ icon: Icon, title, value, description }) => (
        <div
          key={title}
          className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-100 hover:border-emerald-400 transition-all"
        >
          <Icon className="w-8 h-8 text-emerald-600 mb-4" />
          <h4 className="font-mono text-lg font-bold">{title}</h4>
          <p className="text-3xl font-bold text-emerald-600 my-2">{value}</p>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      ))}
    </div>
  );
}