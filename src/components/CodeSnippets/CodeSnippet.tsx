import React from 'react';

interface CodeSnippetProps {
  title: string;
  language: string;
  code: string;
}

export default function CodeSnippet({ title, language, code }: CodeSnippetProps) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
        <h4 className="text-gray-200 font-mono text-sm">{title}</h4>
        <span className="text-xs text-gray-400 font-mono">{language}</span>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-gray-200 font-mono text-sm">{code}</code>
      </pre>
    </div>
  );
}