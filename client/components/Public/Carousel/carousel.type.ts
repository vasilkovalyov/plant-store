import { SwiperProps } from 'swiper/react';

export interface ICarousel {
  slides: React.ReactNode[];
  settings?: SwiperProps;
  className?: string;
}
