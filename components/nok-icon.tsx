import React from 'react';

interface KrIconProps {
  className?: string;
}

const KrIcon: React.FC<KrIconProps> = ({ className }) => (
  <span className={className}>kr</span>
);

export default KrIcon;