import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const showcaseItems = [
  {
    title: 'Hardware Setup',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
    description: 'IoT sensors and Arduino-based monitoring system installed on distribution points'
  },
  {
    title: 'Dashboard Interface',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    description: 'Real-time monitoring dashboard showing consumption patterns and alerts'
  },
  {
    title: 'Data Center',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000',
    description: 'Processing center where AI models analyze consumption data'
  }
];

export default function ProjectShowcase() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-mono font-bold text-center mb-16">Project Showcase</h2>
        
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-yellow-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-emerald-600" />
          </button>
          
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {showcaseItems.map((item) => (
              <div
                key={item.title}
                className="flex-none w-[300px] md:w-[400px] snap-center"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-mono text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-yellow-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-emerald-600" />
          </button>
        </div>
      </div>
    </section>
  );
}