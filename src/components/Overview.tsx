import React from 'react';
import { Activity, Database, Cpu } from 'lucide-react';

export default function Overview() {
  return (
    <section id="overview" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-mono font-bold text-center mb-16">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Activity,
              title: 'Real-time Monitoring',
              description: 'Continuous monitoring of electricity consumption patterns using IoT sensors.',
            },
            {
              icon: Cpu,
              title: 'AI Analysis',
              description: 'Advanced machine learning algorithms detect anomalies and potential theft patterns.',
            },
            {
              icon: Database,
              title: 'Smart Reporting',
              description: 'Automated alerts and comprehensive reports for quick action and prevention.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-b from-[#FFF7DC] to-white border-2 border-[#E6E6E6] hover:border-[#A8D5BA] transition-all"
            >
              <item.icon className="w-12 h-12 text-[#F7A1A1] mb-4" />
              <h3 className="font-mono text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}