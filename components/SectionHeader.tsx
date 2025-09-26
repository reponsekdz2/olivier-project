import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent">{title}</h3>
      <p className="text-gray-400 mt-2 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
