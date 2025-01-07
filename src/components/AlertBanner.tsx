import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { SYSTEM_VOLTAGE } from '../utils/constants';

interface AlertBannerProps {
  value: number; // Current in amperes
}

const AlertBanner: React.FC<AlertBannerProps> = ({ value }) => {
  const power = value * SYSTEM_VOLTAGE; // Calculate power in watts
  const normalPower = 4.8; // Normal power consumption

  return (
    <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-center animate-pulse">
      <AlertTriangle className="w-6 h-6 mr-2 flex-shrink-0" />
      <div>
        <p className="font-bold">Alert: Unusual power consumption detected!</p>
        <p className="text-sm">Current: {value.toFixed(3)} A</p>
        <p className="text-sm">Power Consumption: {power.toFixed(2)} W</p>
        <p className="text-sm">Expected: {normalPower} W | Deviation: +{((power - normalPower) / normalPower * 100).toFixed(1)}%</p>
      </div>
    </div>
  );
}

export default AlertBanner;