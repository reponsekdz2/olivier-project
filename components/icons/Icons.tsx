import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const CalendarIcon: React.FC<IconProps> = ({ className, size = 5, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className || `w-${size} h-${size}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

export const MapPinIcon: React.FC<IconProps> = ({ className, size = 5, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className || `w-${size} h-${size}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className, size = 5, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className || `w-${size} h-${size}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m1-12a1 1 0 011 1v2a1 1 0 01-2 0V6a1 1 0 011-1zm5 4a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm5 4a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm-9 4a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1z"
    />
  </svg>
);
