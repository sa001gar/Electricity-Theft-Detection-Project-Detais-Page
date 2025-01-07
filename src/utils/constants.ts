// Time intervals (in milliseconds)
export const UPDATE_INTERVAL = 1000; // 1 second update interval
export const INITIAL_DATA_POINTS = 100;

// Voltage (in volts)
export const SYSTEM_VOLTAGE = 12;

// Power thresholds (in watts)
export const NORMAL_POWER = 4.8; // Normal power for two 2.4W LEDs
export const THEFT_POWER = {
  MIN: 7.2,  // Minimum theft power (0.6A * 12V)
  MAX: 8.4   // Maximum theft power (0.7A * 12V)
} as const;

// Current thresholds (in amperes)
export const NORMAL_CURRENT = 0.4; // Normal current for two LEDs
export const THEFT_CURRENT = {
  MIN: 0.6, // Minimum theft current
  MAX: 0.7  // Maximum theft current
} as const;