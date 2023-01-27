import React from 'react';
import { IconClearInput } from './IconClearInput';

const IconSvg = ({
  name,
  size,
}: {
  name: string;
  color?: string;
  size: string;
}) => {
  const Icon = () => {
    switch (name) {
      case 'iconClearInput':
        return <IconClearInput size={size} />;
      case 'eye':
        return <IconClearInput size={size} />;
      case 'eye_close':
        return <IconClearInput size={size} />;
      default:
        return null;
    }
  };
  return <>{Icon()}</>;
};

export default IconSvg;
