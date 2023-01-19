import { useState } from 'react';
import { withTranslation } from 'react-i18next';
import Icon from '../../icon/Icon';
import FoldableSection from '../foldableSection';

import './ArtworkMainDescription.css';

const ArtworkMainDescription = ({
  t: __,
  image,
  imageTitle,
  artistInfo,
  category,
  creationYear,
  description,
  subjects,
  styles,
  mediums,
  materials,
  dimensions,
  price,
  status,
}) => {
  const [isFav, setIsFav] = useState(false);

  const smsm = {
    Subject: subjects,
    Medium: mediums,
    Style: styles,
    Materials: materials,
  };

  const onFavClick = () => {
    // TBD: make a call to the backend to see if it's a fav painting or not
    setIsFav((prev) => !prev);
  };

  const { fullname: artistName, country: artistCountry } = artistInfo;
  const { depth, height, width } = dimensions;

  return (
    <div className='artwork-main-container'>
      <div className='artwork-main-left-container'>
        <div className='artwork-image-container'>
          <img src={image} />
          <div className='image-cta'>
            <div className='image-cta-item'>
              <Icon name='eye' />
              &nbsp;
              {__('viewInARoom').toUpperCase()}
            </div>
            <div className='image-cta-item'>
              <Icon name='ar' />
              &nbsp;
              {__('arView').toUpperCase()}
            </div>
          </div>
        </div>
        <FoldableSection title={__('description')}>
          <p>{description}</p>
        </FoldableSection>
        <FoldableSection
          title={`${__('Subject')}, ${__('Medium')}, ${__('Style')}, ${__(
            'Materials'
          )}`}
        >
          {Object.entries(smsm).map(([key, value]) => (
            <div key={key} className='smsm-row'>
              <div>{__(key).toUpperCase()}</div>
              <div>{value.join(', ')}</div>
            </div>
          ))}
        </FoldableSection>
      </div>
      <div className='image-info'>
        <div className='image-info-details'>
          <div className='image-title'>
            {imageTitle}
            <Icon
              name={`${isFav ? 'star-fill' : 'star-empty'}`}
              className='fav'
              onClick={onFavClick}
            />
          </div>
          <div className='artist-info'>
            <div className='artist-name'>{artistName}</div>
            <div className='artist-country'>
              {artistCountry.charAt(0).toUpperCase() +
                artistCountry.toLowerCase().slice(1)}
            </div>
          </div>
          <div>
            {__('categoryCreationYear', {
              category:
                category.charAt(0).toUpperCase() +
                category.toLowerCase().slice(1),
              creationYear,
            })}
          </div>
          <div>{__('size', { width, height, depth })}</div>
        </div>
        {status === 'AVAILABLE' ? (
          <div>
            <div className='price'>{price} &euro;</div>
            <div className='button-cta'>
              <button className='button acquire'>{__('acquire')}</button>
              <button className='button offer'>{__('makeAnOffer')}</button>
            </div>
            <div>
              <Icon name='sand-time' />
              {__('preReserveMsg').toUpperCase()}
            </div>
            <div>
              <Icon name='done' />
              {__('deliveryFee.estimation', {
                delivreyFee: 131,
                shippingCountry: 'France',
              })}
            </div>
            <div>{__('deliveryFee.description')}</div>
            <div className='inputs'>
              <input
                placeholder='Country'
                type='text'
                onChange={() => {
                  //TBD
                }}
              />
              <input
                placeholder='Zip Code'
                step={100}
                type='number'
                onChange={() => {
                  //TBD
                }}
              />
            </div>
            <div>
              <Icon name='delivery' />
              {__('deliveryFee.title', { price: 129 })}
            </div>
            <div>
              <Icon name='location' />
              {__('pickup.title', { city: 'Bruxelle', country: 'Belgium' })}
            </div>
            <div>
              <Icon name='done' />
              {__('trial.title')}
            </div>
          </div>
        ) : (
          <div> NOT AVAILABLE</div>
        )}
      </div>
    </div>
  );
};

export default withTranslation()(ArtworkMainDescription);
