import React from 'react';
import { Database, FileSpreadsheet, BarChart2 } from 'lucide-react';

const datasetInfo = {
  records: '2.5M+',
  timespan: '24 months',
  features: '15+',
  sources: '8 states'
};

const features = [
  'Voltage Readings',
  'Current Flow',
  'Power Factor',
  'Load Patterns',
  'Time of Day',
  'Seasonal Variations',
  'Geographic Location',
  'Consumer Category'
];

export default function Dataset() {
  return (
    <section id="dataset" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-mono font-bold text-center mb-16">Dataset Overview</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-yellow-50 p-6 rounded-xl">
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(datasetInfo).map(([key, value]) => (
                <div key={key} className="text-center">
                  <p className="text-3xl font-bold text-emerald-600 mb-2">{value}</p>
                  <p className="font-mono text-sm capitalize">{key.replace('_', ' ')}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-mono text-lg font-bold mb-4">Key Features</h3>
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: Database,
              title: 'Data Collection',
              description: 'IoT sensors deployed across distribution networks gather real-time consumption data.'
            },
            {
              icon: FileSpreadsheet,
              title: 'Preprocessing',
              description: 'Raw data is cleaned, normalized, and prepared for model training.'
            },
            {
              icon: BarChart2,
              title: 'Analysis',
              description: 'Advanced analytics identify patterns and anomalies in consumption.'
            }
          ].map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white p-6 rounded-xl shadow-lg">
              <Icon className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="font-mono text-lg font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}