import React from 'react';
import Link from 'next/link';
import { 
  IoPersonOutline, 
  IoBriefcaseOutline, 
  IoLogoLinkedin, 
  IoDocumentTextOutline, 
  IoMailOutline,
  IoHomeOutline // Added Home icon import
} from 'react-icons/io5';

const menuItems = [
  { 
    title: 'Home', 
    icon: <IoHomeOutline />, 
    gradientFrom: '#f093fb', // Pinkish-purple gradient start
    gradientTo: '#f5576c',   // Pinkish-red gradient end
    href: '/'
  },
  { 
    title: 'About', 
    icon: <IoPersonOutline />, 
    gradientFrom: '#a955ff', 
    gradientTo: '#ea51ff',
    href: '/about'
  },
  { 
    title: 'Work', 
    icon: <IoBriefcaseOutline />, 
    gradientFrom: '#56CCF2', 
    gradientTo: '#2F80ED',
    href: '/projects'
  },
  { 
    title: 'Resume', 
    icon: <IoDocumentTextOutline />, 
    gradientFrom: '#FF9966', 
    gradientTo: '#FF5E62',
    href: 'https://drive.google.com/file/d/1n-440fHBHOlmWhfXQGFwZuYXNS36Ds6O/view?usp=sharing',
    external: true
  },
  { 
    title: 'Contact', 
    icon: <IoMailOutline />, 
    gradientFrom: '#80FF72', 
    gradientTo: '#7EE8FA',
    href: '/contact'
  },
  { 
    title: 'LinkedIn', 
    icon: <IoLogoLinkedin />, 
    gradientFrom: '#0077b5', 
    gradientTo: '#00a0dc',
    href: 'https://www.linkedin.com/in/rudransh-chouksey/',
    external: true
  }
];

export default function GradientMenu() {
  return (
    // Updated container: Reduced padding from py-6 to py-2 to remove top whitespace
    <div className="sticky top-0 z-50 flex justify-center items-center mr-0pointer-events-none">
      <ul className="flex flex-wrap justify-center gap-4 md:gap-6 pointer-events-auto">
        {menuItems.map(({ title, icon, gradientFrom, gradientTo, href, external }, idx) => (
          <Link 
            key={idx} 
            href={href}
            target={external ? "_blank" : "_self"}
            rel={external ? "noopener noreferrer" : ""}
          >
            <li
              style={{ '--gradient-from': gradientFrom, '--gradient-to': gradientTo } as React.CSSProperties}
              // Removed bg-white and shadow-lg, added bg-transparent. Removed hover:shadow-none as there is no shadow.
              className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-transparent rounded-full flex items-center justify-center transition-all duration-500 hover:w-[140px] md:hover:w-[150px] group cursor-pointer"
            >
              {/* Gradient background on hover */}
              <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100"></span>
              
              {/* Blur glow */}
              <span className="absolute top-[10px] inset-x-0 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] blur-[15px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-50"></span>

              {/* Icon - Changed default color to text-white for visibility on dark background */}
              <span className="relative z-10 transition-all duration-500 group-hover:scale-0 delay-0">
                <span className="text-xl md:text-2xl text-white group-hover:text-white transition-colors">{icon}</span>
              </span>

              {/* Title */}
              <span className="absolute text-white uppercase tracking-wide text-xs md:text-sm font-bold transition-all duration-500 scale-0 group-hover:scale-100 delay-150 whitespace-nowrap">
                {title}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}