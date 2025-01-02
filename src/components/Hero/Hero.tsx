import React from 'react';
import { Shield, Zap, AlertTriangle, ArrowRight } from 'lucide-react';
import StatsCard from './StatsCard';

export default function Hero() {
  return (
    <section className="min-h-[90vh] bg-gradient-to-b from-yellow-50 to-white flex items-center py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>AI-Powered Solution</span>
            </div>
            
            <h1 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Protecting Power Grids with
              <span className="block text-emerald-600 mt-2">Artificial Intelligence</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
              Our advanced system uses AI to detect and prevent electricity theft in real-time,
              ensuring grid stability and reducing losses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all font-mono group">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-all font-mono">
                View Demo
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 max-w-lg mx-auto lg:mx-0">
              {[
                { label: 'Detection Rate', value: '99.9%' },
                { label: 'Cost Savings', value: '$2.5M' },
                { label: 'Grid Stability', value: '95%' }
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">{value}</div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-emerald-200 opacity-20 rounded-full blur-3xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <StatsCard
                  icon={Shield}
                  title="Protection"
                  value="99.9%"
                  description="Accuracy in Detection"
                />
                <StatsCard
                  icon={AlertTriangle}
                  title="Prevention"
                  value="85%"
                  description="Theft Reduction"
                />
              </div>
              <div className="mt-8 space-y-4">
                <StatsCard
                  icon={Zap}
                  title="Savings"
                  value="$2.5M"
                  description="Annual Recovery"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}