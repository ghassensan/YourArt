import { withTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Icon from '../../icon/Icon';

import './NavPath.css';

const NavPath = ({ t: __, category, artistName, imageTitle }) => {
  const navigate = useNavigate();
  // TBD: Should be a link from one page to another. I'll just creat the link redirectnig to the home page
  return (
    <div className='nav-path-container'>
      <div
        onClick={() => {
          navigate('/');
        }}
        className='home'
      >
        {__('home')}
      </div>
      <Icon name='arrow-left' className='nav-path-arrow' />
      <div>
        {category.charAt(0).toUpperCase() + category.toLowerCase().slice(1)}
      </div>
      <Icon name='arrow-left' className='nav-path-arrow' />
      <div className='nav-path-artist-name'>{artistName}</div>

      <div>{__('artworks')}</div>
      <Icon name='arrow-left' className='nav-path-arrow' />
      <div className='nav-path-image-title'>{imageTitle}</div>
    </div>
  );
};

export default withTranslation()(NavPath);
