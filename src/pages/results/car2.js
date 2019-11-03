import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
//images
import p0 from '../images/p2.jpeg';
import p1 from '../images/transformation1.jpg';
import p2 from '../images/transformation2.jpg';
import p3 from '../images/transformation3.jpg';
import p4 from '../images/transformation4.jpg';
import p5 from '../images/transformation5.jpg';
import p6 from '../images/transformation6.jpg';
import p7 from '../images/transformation7.jpg';
import p8 from '../images/transformation8.jpg';
import p9 from '../images/transformation9.jpg';
import p10 from '../images/transformation10.jpg';
import p11 from '../images/transformation11.JPG';

const items = [
  {
    src: p0,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: p1,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src:p2,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: p3,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: p4,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src:p5,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },{
    src: p6,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: p7,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src:p8,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: p9,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: p10,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src:p11,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;