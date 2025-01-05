import React from 'react';
import { X, CheckCircle } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  if (!isOpen) return null;

  const steps = [
    {
      title: 'Project Overview',
      description: 'Learn about ElectroGuard AI and its capabilities',
      link: '#overview'
    },
    {
      title: 'Technical Documentation',
      description: 'Access detailed technical specifications and API documentation',
      link: '#code'
    },
    {
      title: 'Try Demo',
      description: 'Experience the system with our interactive demo',
      link: '#demo'
    },
    {
      title: 'Implementation Guide',
      description: 'Step-by-step guide for system implementation',
      link: '#solution'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-mono font-bold">Get Started</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <a
                key={step.title}
                href={step.link}
                onClick={onClose}
                className="block p-4 border border-gray-200 rounded-lg hover:border-emerald-500 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}