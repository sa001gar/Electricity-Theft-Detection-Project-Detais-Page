import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
  email?: string;
}

export default function TeamMember({ name, role, image, github, linkedin, instagram, email }: TeamMemberProps) {
  return (
    <div className="group bg-white p-6 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-emerald-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </div>
      <h3 className="font-mono text-lg font-bold mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-4">{role}</p>
      
      <div className="flex justify-center gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-emerald-600 transition-colors p-2 hover:bg-emerald-50 rounded-full"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-emerald-600 transition-colors p-2 hover:bg-emerald-50 rounded-full"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-emerald-600 transition-colors p-2 hover:bg-emerald-50 rounded-full"
            aria-label="Instagram Profile"
          >
            <Instagram className="w-5 h-5" />
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-gray-600 hover:text-emerald-600 transition-colors p-2 hover:bg-emerald-50 rounded-full"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
}