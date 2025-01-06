import React, { useState } from 'react';
import { Zap } from 'lucide-react';
import MobileMenu from './MobileMenu';

const navItems = [
  'Overview',
  'Problem',
  'Solution',
  'Statistics',
  'Code',
  'Demo',
  // 'Roadmap',
  'Impact'
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-yellow-50 border-b border-yellow-200 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="w-8 h-8 text-emerald-600" />
          <span className="font-mono text-xl font-bold">ElectroGuard</span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="font-mono text-sm hover:text-emerald-600 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu 
          items={navItems}
          isOpen={isMenuOpen} 
          onToggle={() => setIsMenuOpen(!isMenuOpen)} 
        />
      </div>
    </header>
  );
}