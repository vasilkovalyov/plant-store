import React from 'react';
import cn from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { ICarousel } from './carousel.type';

export default function Carousel({ slides, settings, className }: ICarousel) {
  return (
    <div className={cn('carousel', className)}>
      <div className="carousel__wrapper overflow-hidden">
        <Swiper spaceBetween={0} slidesPerView={1} {...settings}>
          {slides.length &&
            slides.map((slide, index) => (
              <SwiperSlide key={index}>{slide}</SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
