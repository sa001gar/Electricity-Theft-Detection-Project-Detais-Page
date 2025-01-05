import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Problem from './components/Problem/Problem';
import Solution from './components/Solution/Solution';
import Statistics from './components/Statistics/Statistics';
import CodeSnippets from './components/CodeSnippets/CodeSnippets';
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase';
import Roadmap from './components/Roadmap/Roadmap';
import Impact from './components/Impact/Impact';
import Footer from './components/Footer/Footer';
import DemoModal from './components/Demo/DemoModal';
import GetStartedModal from './components/GetStarted/GetStartedModal';

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero 
          onDemoClick={() => setIsDemoOpen(true)}
          onGetStartedClick={() => setIsGetStartedOpen(true)}
        />
        <Problem />
        <Solution />
        <Statistics />
        <CodeSnippets />
        <ProjectShowcase />
        <Roadmap />
        <Impact />
      </main>
      <Footer />
      
      <DemoModal 
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
      <GetStartedModal
        isOpen={isGetStartedOpen}
        onClose={() => setIsGetStartedOpen(false)}
      />
    </div>
  );
}