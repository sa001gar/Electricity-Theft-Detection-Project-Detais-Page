import { useState, useEffect, useCallback } from 'react';

interface Point {
  time: number;
  value: number;
}

const NORMAL_BASELINE = 100;
const THEFT_BASELINE = 60;
const UPDATE_INTERVAL = 100;
const MAX_POINTS = 100;

export default function useSimulation() {
  const [data, setData] = useState<Point[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationType, setSimulationType] = useState<'normal' | 'theft' | null>(null);

  const generatePoint = useCallback((time: number, type: 'normal' | 'theft'): Point => {
    const baseline = type === 'normal' ? NORMAL_BASELINE : THEFT_BASELINE;
    const noise = Math.random() * 10 - 5;
    const anomaly = type === 'theft' && Math.random() > 0.8 ? -20 : 0;
    
    return {
      time,
      value: baseline + noise + anomaly
    };
  }, []);

  const startSimulation = useCallback((type: 'normal' | 'theft') => {
    setSimulationType(type);
    setIsSimulating(true);
    setData([]);
  }, []);

  const stopSimulation = useCallback(() => {
    setIsSimulating(false);
    setSimulationType(null);
  }, []);

  useEffect(() => {
    if (!isSimulating || !simulationType) return;

    const interval = setInterval(() => {
      setData(currentData => {
        const newPoint = generatePoint(currentData.length, simulationType);
        const newData = [...currentData, newPoint];
        return newData.slice(-MAX_POINTS);
      });
    }, UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, [isSimulating, simulationType, generatePoint]);

  return {
    data,
    isSimulating,
    simulationType,
    startSimulation,
    stopSimulation
  };
}