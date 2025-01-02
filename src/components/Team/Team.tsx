import React from 'react';
import TeamMember from './TeamMember';

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Project Lead & AI Researcher',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'sarah@example.com'
  },
  {
    name: 'Alex Kumar',
    role: 'Hardware Systems Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'alex@example.com'
  },
  {
    name: 'Maria Rodriguez',
    role: 'Data Scientist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=256',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'maria@example.com'
  },
  {
    name: 'James Wilson',
    role: 'Software Architect',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'james@example.com'
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-mono font-bold text-center mb-16">Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}