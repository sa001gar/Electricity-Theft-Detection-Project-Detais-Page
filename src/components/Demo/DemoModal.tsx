import React from 'react';
import { X, AlertTriangle } from 'lucide-react';
import Graph from './Graph';
import useSimulation from './useSimulation';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const { 
    data, 
    isSimulating, 
    simulationType,
    startSimulation, 
    stopSimulation 
  } = useSimulation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-mono font-bold">Interactive Demo</h2>
            <button 
              onClick={() => {
                stopSimulation();
                onClose();
              }} 
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="mb-4">
              <h3 className="font-mono text-lg font-bold">Power Consumption Graph</h3>
              <p className="text-sm text-gray-600">Real-time visualization of electricity consumption patterns</p>
            </div>
            
            <div className="aspect-[2/1] bg-white rounded-lg p-4 border border-gray-200">
              <Graph 
                data={data} 
                color={simulationType === 'theft' ? '#dc2626' : '#059669'}
              />
            </div>

            {simulationType === 'theft' && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono font-bold text-red-600">Anomaly Detected!</h4>
                  <p className="text-sm text-red-600">
                    Unusual consumption pattern detected. This could indicate potential electricity theft.
                  </p>
                </div>
              </div>
            )}
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-mono font-bold mb-2">Normal Usage</h4>
              <button 
                onClick={() => startSimulation('normal')}
                disabled={isSimulating && simulationType === 'normal'}
                className="w-full py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSimulating && simulationType === 'normal' ? 'Simulating...' : 'Simulate Normal'}
              </button>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-mono font-bold mb-2">Anomaly Detection</h4>
              <button 
                onClick={() => startSimulation('theft')}
                disabled={isSimulating && simulationType === 'theft'}
                className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSimulating && simulationType === 'theft' ? 'Simulating...' : 'Simulate Theft'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}