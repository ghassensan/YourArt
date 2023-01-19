import { useCallback, useEffect, useRef } from 'react';
import { withTranslation } from 'react-i18next';
import Icon from '../../icon/Icon';
import './Slider.css';

const Slider = ({ t: __, images }) => {
  // Note this can be done with observables as well instead of css changes.
  const imageInnerContainerRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);
  const requestRef = useRef(null);

  const onScroll = useCallback(() => {
    const showRightArrow =
      imageInnerContainerRef?.current?.offsetWidth +
        imageInnerContainerRef?.current?.scrollLeft <
      imageInnerContainerRef?.current?.scrollWidth;
    const showLeftArrow = imageInnerContainerRef?.current?.scrollLeft > 0;
    leftArrowRef.current?.classList?.toggle('visible', showLeftArrow);
    rightArrowRef.current?.classList?.toggle('visible', showRightArrow);
    requestRef.current = requestAnimationFrame(onScroll);
  }, [
    imageInnerContainerRef?.current,
    leftArrowRef?.current,
    rightArrowRef?.current,
  ]);

  const scrollLeft = (ref) => {
    ref.current.scrollLeft -= 100;
  };

  const scrollRight = (ref) => {
    ref.current.scrollLeft += 100;
  };

  useEffect(() => {
    requestAnimationFrame(onScroll);
    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [onScroll]);

  return (
    <div className='image-container'>
      <div
        className='arrow left'
        ref={leftArrowRef}
        onClick={() => scrollLeft(imageInnerContainerRef)}
      >
        <Icon name='arrow-left' />
      </div>
      <div
        className='image-inner-container'
        ref={imageInnerContainerRef}
        onScroll={onScroll}
      >
        {images.map((image) => (
          <img key={image} src={image} />
        ))}
      </div>
      <div
        className='arrow right'
        ref={rightArrowRef}
        onClick={() => scrollRight(imageInnerContainerRef)}
      >
        <Icon name='arrow-left' />
      </div>
    </div>
  );
};

export default withTranslation()(Slider);
