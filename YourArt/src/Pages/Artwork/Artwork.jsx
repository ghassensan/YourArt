import { useCallback, useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';

import { useParams } from 'react-router-dom';
import ArtworkMainDescription from '../../component/artworkMainDescription/ArtworkMainDescription';
import NavPath from '../../component/navPath';
import Slider from '../../component/slider';
import ArtworkApi from '../../services/artwork';
import './Artwork.css';

const ArtworkView = ({ t: __ }) => {
  const { artworkId } = useParams();
  const [artwork, setArtwork] = useState();
  const getArtwork = useCallback(async () => {
    const { data: data } = await ArtworkApi.getArtwork(artworkId);
    setArtwork(data);
  }, [artworkId]);

  useEffect(() => {
    getArtwork();
  }, [getArtwork]);

  const {
    title,
    description,
    styles,
    mediums,
    materials,
    subjects,
    imageUrl,
    category,
    creationYear,
    price,
    status,
    dimensions: dimensions,
    artistShort: artistInfo,
    otherArtworkImages,
  } = artwork ?? {};

  return (
    artwork && (
      <div className='page-container'>
        <NavPath
          category={category}
          artistName={artistInfo.fullname}
          imageTitle={title}
        />
        <ArtworkMainDescription
          image={imageUrl}
          description={description}
          subjects={subjects}
          styles={styles}
          mediums={mediums}
          materials={materials}
          imageTitle={title}
          artistInfo={artistInfo}
          category={category}
          creationYear={creationYear}
          dimensions={dimensions}
          price={price}
          status={status}
        />
        <Slider images={otherArtworkImages} />
      </div>
    )
  );
};

export default withTranslation()(ArtworkView);
