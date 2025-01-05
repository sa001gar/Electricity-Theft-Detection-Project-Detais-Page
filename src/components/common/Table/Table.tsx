import React from 'react';

interface Column {
  key: string;
  header: string;
  align?: 'left' | 'right' | 'center';
  className?: string;
}

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
  className?: string;
  highlightRow?: (row: Record<string, any>) => boolean;
}

export default function Table({ columns, data, className = '', highlightRow }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5 rounded-lg">
          <table className="min-w-full divide-y divide-yellow-100">
            <thead className="bg-yellow-50">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className={`px-4 py-3 text-sm font-mono font-semibold ${
                      column.align === 'right' ? 'text-right' : 'text-left'
                    } ${column.className || ''}`}
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-yellow-100 bg-white">
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={`hover:bg-yellow-50 transition-colors ${
                    highlightRow?.(row) ? 'bg-yellow-50' : ''
                  }`}
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={`px-4 py-3 text-sm whitespace-nowrap ${
                        column.align === 'right' ? 'text-right' : 'text-left'
                      } ${column.className || ''}`}
                    >
                      {row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}