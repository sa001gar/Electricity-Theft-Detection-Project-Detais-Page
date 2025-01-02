import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Problem from './components/Problem/Problem';
import Solution from './components/Solution/Solution';
import Statistics from './components/Statistics/Statistics';
import CodeSnippets from './components/CodeSnippets/CodeSnippets';
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase';
import Roadmap from './components/Roadmap/Roadmap';
import Dataset from './components/Dataset/Dataset';
import Impact from './components/Impact/Impact';
import Team from './components/Team/Team';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Statistics />
        <CodeSnippets />
        <ProjectShowcase />
        <Roadmap />
        <Dataset />
        <Impact />
        <Team />
      </main>
    </div>
  );
}