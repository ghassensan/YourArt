import { useState } from 'react';
import { withTranslation } from 'react-i18next';

import './FoldableSection.css';

const FoldableSection = ({ t: __, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onTitleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='foldable-section-container'>
      <div onClick={onTitleClick} className='foldable-section-title'>
        {title.toUpperCase()}
      </div>
      {isOpen && children}
    </div>
  );
};

export default withTranslation()(FoldableSection);
