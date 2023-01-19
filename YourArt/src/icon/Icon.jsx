import React from 'react';
import './icon.css';

import { ReactComponent as Ar } from './icons/ar.svg';
import { ReactComponent as ArrowLeft } from './icons/arrow-left.svg';
import { ReactComponent as Delivery } from './icons/delivery.svg';
import { ReactComponent as Done } from './icons/done.svg';
import { ReactComponent as Eye } from './icons/eye.svg';
import { ReactComponent as Location } from './icons/location.svg';
import { ReactComponent as SandTime } from './icons/sand-time.svg';
import { ReactComponent as StarEmpty } from './icons/star-empty.svg';
import { ReactComponent as StarFill } from './icons/star-fill.svg';

const displayIcon = (iconName) => {
  switch (iconName) {
    case 'arrow-left':
      return <ArrowLeft />;
    case 'eye':
      return <Eye />;
    case 'ar':
      return <Ar />;
    case 'sand-time':
      return <SandTime />;
    case 'done':
      return <Done />;
    case 'delivery':
      return <Delivery />;
    case 'location':
      return <Location />;
    case 'star-empty':
      return <StarEmpty />;
    case 'star-fill':
      return <StarFill />;

    default:
      return false;
  }
};

export default function Icon({ name = 'empty', className = '', ...props }) {
  return (
    <span className={`icon ${name} ${className}`} {...props}>
      {displayIcon(name)}
    </span>
  );
}
