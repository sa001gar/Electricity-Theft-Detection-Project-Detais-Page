import React from 'react';
import { Zap } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#FFF7DC] border-b-2 border-[#A8D5BA] p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="w-8 h-8 text-[#F7A1A1]" />
          <span className="font-mono text-xl font-bold">ElectroGuard AI</span>
        </div>
        <nav>
          <ul className="flex gap-6">
            {['Overview', 'Problem', 'Solution', 'Roadmap', 'Impact', 'Team'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="font-mono text-sm hover:text-[#F7A1A1] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}