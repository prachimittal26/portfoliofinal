import React from 'react';
import { FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';
import { SiMicrosoftoutlook } from 'react-icons/si';

interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: JSX.Element;
}

const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/your-profile',
    icon: <FaLinkedin size={30} />,
  },
  {
    id: 2,
    name: 'LeetCode',
    url: 'https://leetcode.com/your-profile',
    icon: <FaCode size={30} />,
  },
  {
    id: 3,
    name: 'Email',
    url: 'mailto:your-email@example.com',
    icon: <FaEnvelope size={30} />,
  },
  {
    id: 4,
    name: 'Outlook',
    url: 'mailto:your-email@outlook.com',
    icon: <SiMicrosoftoutlook size={30} />,
  },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-6">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-900"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
