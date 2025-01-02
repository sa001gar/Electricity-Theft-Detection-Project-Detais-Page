import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

export default function TeamMember({ name, role, image, github, linkedin, email }: TeamMemberProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h3 className="font-mono text-lg font-bold mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-4">{role}</p>
      
      <div className="flex justify-center gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-emerald-600 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-emerald-600 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-gray-600 hover:text-emerald-600 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
}