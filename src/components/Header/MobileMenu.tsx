import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <button onClick={onToggle} className="p-2">
        {isOpen ? (
          <X className="w-6 h-6 text-gray-800" />
        ) : (
          <Menu className="w-6 h-6 text-gray-800" />
        )}
      </button>
      {isOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-yellow-50 border-b border-yellow-100 shadow-lg">
          <ul className="py-4">
            {['Overview', 'Problem', 'Solution', 'Roadmap', 'Impact', 'Team'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block px-6 py-3 font-mono text-sm hover:bg-yellow-100 transition-colors"
                  onClick={onToggle}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}