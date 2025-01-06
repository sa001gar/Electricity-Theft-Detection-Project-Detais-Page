import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Solution from './components/Solution/Solution';
import Statistics from './components/Statistics/Statistics';
import CodeSnippets from './components/CodeSnippets/CodeSnippets';
import Team from './components/Team/Team';
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
        <Solution />
        <Statistics />
        <CodeSnippets />
        <Team />
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