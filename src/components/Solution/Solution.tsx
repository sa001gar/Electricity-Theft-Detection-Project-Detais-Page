import React from 'react';
import { Cpu, Wifi, Database, BarChart } from 'lucide-react';

const components = [
  {
    icon: Wifi,
    title: 'IoT Sensors',
    description: 'Advanced sensors monitor electricity consumption patterns in real-time.',
    details: ['Current measurement', 'Voltage monitoring', 'Power factor analysis']
  },
  {
    icon: Cpu,
    title: 'AI Model',
    description: 'TensorFlow-based neural network for anomaly detection.',
    details: ['Pattern recognition', 'Anomaly detection', 'Predictive analysis']
  },
  {
    icon: Database,
    title: 'Data Processing',
    description: 'Real-time data processing and storage system.',
    details: ['Data cleaning', 'Feature extraction', 'Historical analysis']
  },
  {
    icon: BarChart,
    title: 'Dashboard',
    description: 'Interactive web dashboard for monitoring and alerts.',
    details: ['Real-time monitoring', 'Alert system', 'Analytics reports']
  }
];

export default function Solution() {
  return (
    <section id="solution" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-mono font-bold text-center mb-16">Our Solution</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {components.map(({ icon: Icon, title, description, details }) => (
            <div
              key={title}
              className="group bg-yellow-50 p-6 rounded-xl transition-all hover:shadow-lg"
            >
              <Icon className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="font-mono text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>
              <ul className="space-y-2 text-sm text-gray-500">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}