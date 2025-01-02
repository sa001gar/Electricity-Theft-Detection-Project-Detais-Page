import React from 'react';
import { Shield, Zap, AlertTriangle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[90vh] bg-gradient-to-b from-[#FFF7DC] to-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-mono text-5xl font-bold leading-tight">
              AI-Powered
              <br />
              <span className="text-[#F7A1A1]">Electricity Theft</span>
              <br />
              Detection System
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Protecting power grids with cutting-edge artificial intelligence. 
              Our system detects and prevents electricity theft in real-time.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-[#A8D5BA] text-white rounded-lg hover:bg-opacity-90 transition-all font-mono">
                Learn More
              </button>
              <button className="px-6 py-3 border-2 border-[#A8D5BA] text-[#A8D5BA] rounded-lg hover:bg-[#A8D5BA] hover:text-white transition-all font-mono">
                View Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#B8DFF0] opacity-20 rounded-full blur-3xl"></div>
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

function StatsCard({ icon: Icon, title, value, description }: {
  icon: React.ElementType;
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#E6E6E6] hover:border-[#A8D5BA] transition-all">
      <Icon className="w-8 h-8 text-[#F7A1A1] mb-3" />
      <h3 className="font-mono font-bold text-lg">{title}</h3>
      <p className="text-3xl font-bold text-[#A8D5BA] my-2">{value}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}