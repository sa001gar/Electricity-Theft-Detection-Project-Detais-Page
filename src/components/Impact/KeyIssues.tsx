import React from 'react';
import { AlertTriangle, Shield, Zap, Activity } from 'lucide-react';

const issues = [
  {
    icon: AlertTriangle,
    title: 'Safety Hazards',
    description: 'Illegal connections pose serious risks to public safety and can cause fatal accidents.'
  },
  {
    icon: Shield,
    title: 'Revenue Loss',
    description: 'Utilities face massive financial losses due to unaccounted energy consumption.'
  },
  {
    icon: Zap,
    title: 'Grid Instability',
    description: 'Unauthorized power draws create unpredictable load patterns affecting grid stability.'
  },
  {
    icon: Activity,
    title: 'Quality of Service',
    description: 'Legitimate consumers suffer from voltage fluctuations and frequent outages.'
  }
];

export default function KeyIssues() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {issues.map(({ icon: Icon, title, description }) => (
        <div
          key={title}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-start gap-4">
            <div className="bg-yellow-50 p-3 rounded-lg">
              <Icon className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h4 className="font-mono text-lg font-bold mb-2">{title}</h4>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}