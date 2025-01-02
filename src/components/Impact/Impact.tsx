import React from 'react';
import ImpactMetrics from './ImpactMetrics';
import KeyIssues from './KeyIssues';

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-mono font-bold text-center mb-16">Key Issues & Impact</h2>
        <div className="space-y-16">
          <KeyIssues />
          <div>
            <h3 className="text-2xl font-mono font-bold text-center mb-8">Project Impact</h3>
            <ImpactMetrics />
          </div>
        </div>
      </div>
    </section>
  );
}