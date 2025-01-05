import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const milestones = [
  {
    date: 'Phase 1',
    title: 'Research & Planning',
    description: 'Problem analysis, technology selection, and architecture design.',
    completed: true
  },
  {
    date: 'Phase 2',
    title: 'Core Development',
    description: 'AI model development, sensor integration, and data processing pipeline.',
    completed: true
  },
  {
    date: 'Phase 3',
    title: 'Testing & Validation',
    description: 'System testing with real-world data and performance optimization.',
    completed: false
  },
  {
    date: 'Phase 4',
    title: 'Deployment',
    description: 'Full-scale implementation and monitoring setup.',
    completed: false
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-mono font-bold text-center mb-16">Project Roadmap</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-emerald-200" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.title} className={`relative ${index % 2 === 0 ? 'sm:pr-1/2' : 'sm:pl-1/2 sm:ml-auto'}`}>
                  <div className={`sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="flex items-center gap-3 mb-2">
                        {milestone.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-400" />
                        )}
                        <span className="font-mono text-sm text-emerald-600">{milestone.date}</span>
                      </div>
                      <h3 className="font-mono text-lg font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}