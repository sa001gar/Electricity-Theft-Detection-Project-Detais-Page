import React from 'react';
import StateWiseStats from './StateWiseStats';
import GlobalRankings from './GlobalRankings';

export default function Statistics() {
  return (
    <section id="statistics" className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-mono font-bold text-center mb-16">Statistics & Impact</h2>
        <div className="space-y-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <StateWiseStats />
            <GlobalRankings />
          </div>
        </div>
      </div>
    </section>
  );
}