import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const MapPinIcon: React.FC<IconProps> = ({ className, size = 5 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size * 4} 
    height={size * 4} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ className, size = 5 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size * 4} 
    height={size * 4} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className, size = 5 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size * 4} 
    height={size * 4} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 3L9.27 9.27L3 12l6.27 2.73L12 21l2.73-6.27L21 12l-6.27-2.73L12 3z"></path>
    <path d="M5 3v4"></path>
    <path d="M19 17v4"></path>
    <path d="M3 5h4"></path>
    <path d="M17 19h4"></path>
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className, size = 5 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size * 4} 
    height={size * 4} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);


export const PlusIcon: React.FC<IconProps> = ({ className, size = 6 }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size * 4} 
        height={size * 4} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

export const MinusIcon: React.FC<IconProps> = ({ className, size = 6 }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size * 4} 
        height={size * 4} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className, size = 5 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 4}
    height={size * 4}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);


export const TwitterIcon: React.FC<IconProps> = ({ className, size = 5 }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size * 4} 
        height={size * 4} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className, size = 5 }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size * 4} 
        height={size * 4} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({ className, size = 5 }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size * 4} 
        height={size * 4} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);

// New Icons for Header Search Mode
export const GlobeIcon: React.FC<IconProps> = ({ className, size = 5 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size*4} height={size*4} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);

export const TicketIcon: React.FC<IconProps> = ({ className, size = 5 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size*4} height={size*4} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 9a3 3 0 0 1 0 6v3a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3a3 3 0 0 1 0-6V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
);

export const ImageIcon: React.FC<IconProps> = ({ className, size = 5 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size*4} height={size*4} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
);

export const NewspaperIcon: React.FC<IconProps> = ({ className, size = 5 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size*4} height={size*4} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h0"></path><path d="M16 2v20"></path><path d="M8 7h4"></path><path d="M8 12h4"></path><path d="M8 17h4"></path></svg>
);

export const StarIcon: React.FC<IconProps> = ({ className, size = 5 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size*4} height={size*4} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);

export const InfoIcon: React.FC<IconProps> = ({ className, size = 5 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size*4} height={size*4} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
);

export const HelpCircleIcon: React.FC<IconProps> = ({ className, size = 5 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size*4} height={size*4} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
);