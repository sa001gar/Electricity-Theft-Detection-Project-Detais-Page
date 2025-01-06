import React from 'react';
import TeamMember from './TeamMember';

const teamMembers = [
  {
    name: 'Aditya Kumar',
    role: 'Team Lead & ML Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256',
    github: 'https://github.com/adityakumar',
    linkedin: 'https://linkedin.com/in/adityakumar',
    instagram: 'https://instagram.com/adityakumar',
    email: 'aditya@electroguard.ai'
  },
  {
    name: 'Priya Sharma',
    role: 'Hardware Systems Engineer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256',
    github: 'https://github.com/priyasharma',
    linkedin: 'https://linkedin.com/in/priyasharma',
    instagram: 'https://instagram.com/priyasharma',
    email: 'priya@electroguard.ai'
  },
  {
    name: 'Rahul Verma',
    role: 'Data Scientist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256',
    github: 'https://github.com/rahulverma',
    linkedin: 'https://linkedin.com/in/rahulverma',
    instagram: 'https://instagram.com/rahulverma',
    email: 'rahul@electroguard.ai'
  },
  {
    name: 'Neha Patel',
    role: 'Software Developer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=256',
    github: 'https://github.com/nehapatel',
    linkedin: 'https://linkedin.com/in/nehapatel',
    instagram: 'https://instagram.com/nehapatel',
    email: 'neha@electroguard.ai'
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-mono font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600">
            A dedicated group of innovators working to revolutionize electricity theft detection
            using cutting-edge AI technology.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-mono font-bold mb-4">Join Our Team</h3>
          <p className="text-gray-600 mb-6">
            We're always looking for talented individuals passionate about AI and energy conservation.
          </p>
          <a
            href="mailto:careers@electroguard.ai"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  );
}