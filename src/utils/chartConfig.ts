import { ChartOptions } from 'chart.js';

export const getChartOptions = (): ChartOptions => ({
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 750,
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'LED Current Monitoring',
      font: {
        size: 16,
        weight: 'normal'
      }
    },
  },
  scales: {
    x: {
      grid: {
        display: true,
        color: 'rgba(0, 0, 0, 0.05)',
        drawBorder: false,
      },
      ticks: {
        maxRotation: 0,
        autoSkip: true,
        maxTicksLimit: 8,
        font: {
          size: 11
        }
      }
    },
    y: {
      position: 'right',
      grid: {
        display: true,
        color: 'rgba(0, 0, 0, 0.05)',
        drawBorder: false,
      },
      ticks: {
        callback: (value) => `${Number(value).toFixed(2)}A`,
        stepSize: 0.1,
        font: {
          size: 11
        }
      },
      min: 0.3,
      max: 1.0,
      suggestedMin: 0.3,
      suggestedMax: 1.0,
    },
  },
  interaction: {
    intersect: false,
    mode: 'index',
  },
  elements: {
    line: {
      tension: 0.4,
      borderWidth: 2,
    },
    point: {
      radius: 0,
    }
  },
});