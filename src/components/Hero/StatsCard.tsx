import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
}

export default function StatsCard({ icon: Icon, title, value, description }: StatsCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-100 hover:border-emerald-400 transition-all">
      <Icon className="w-8 h-8 text-emerald-600 mb-3" />
      <h3 className="font-mono font-bold text-lg">{title}</h3>
      <p className="text-3xl font-bold text-emerald-600 my-2">{value}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}