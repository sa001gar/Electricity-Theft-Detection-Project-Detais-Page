import React from 'react';
import { AlertCircle } from 'lucide-react';
import ProblemChart from './ProblemChart';

export default function Problem() {
  const challenges = [
    'Annual global losses exceeding $96 billion',
    'Traditional detection methods are ineffective',
    'Increasing sophistication of theft techniques',
    'Risk to grid stability and safety',
  ];

  return (
    <section id="problem" className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-mono font-bold mb-6">The Problem</h2>
          <p className="text-gray-600">
            Electricity theft remains one of the most significant challenges facing power utilities worldwide,
            leading to massive financial losses and grid instability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-mono text-xl font-bold mb-4">Key Challenges</h3>
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <ProblemChart />
        </div>
      </div>
    </section>
  );
}