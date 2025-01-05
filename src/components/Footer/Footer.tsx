import React from 'react';
import { Github, Mail, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-emerald-500" />
              <span className="font-mono text-lg font-bold text-white">ElectroGuard AI</span>
            </div>
            <p className="text-sm">
              Protecting power grids with artificial intelligence. 
              Making electricity distribution safer and more efficient.
            </p>
          </div>
          
          <div>
            <h3 className="font-mono text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Problem', 'Solution', 'Demo', 'Impact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-sm hover:text-emerald-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-mono text-lg font-bold text-white mb-4">Contact</h3>
            <div className="space-y-4">
              <a 
                href="mailto:contact@electroguard.ai"
                className="flex items-center gap-2 text-sm hover:text-emerald-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@electroguard.ai
              </a>
              <a 
                href="https://github.com/electroguard-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-emerald-500 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} ElectroGuard AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}