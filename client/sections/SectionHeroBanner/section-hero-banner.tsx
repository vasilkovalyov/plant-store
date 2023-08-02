'use client';
import Link from 'next/link';
import { Pagination } from 'swiper/modules';

import Image from 'next/image';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { ISectionHeroBannerProps } from './section-hero-banner.type';

import Carousel from '@/components/Public/Carousel/carousel';

export default function SectionHeroBanner({
  items,
  pretitle,
  title,
  text,
}: ISectionHeroBannerProps) {
  return (
    <Box
      component="section"
      className="section-hero-banner"
      position="relative"
    >
      <Container className="section-hero-banner__container">
        <Box
          className="section-hero-banner__content"
          position="relative"
          zIndex={2}
        >
          {pretitle && (
            <Typography variant="overline" marginBottom={1}>
              {pretitle}
            </Typography>
          )}
          <Typography variant="h1" marginBottom={1}>
            {title}
          </Typography>
          {text && (
            <Typography variant="body1" marginBottom={3}>
              {text}
            </Typography>
          )}
          <Link
            href="/shop"
            className="button button--medium button--primary button--contained"
          >
            Shop now
          </Link>
        </Box>
      </Container>
      <Carousel
        slides={items.map((slide, index) => (
          <Box
            key={`section-hero-banner-${index}`}
            className="hero-banner-carousel__slide"
          >
            <Image
              src={slide.url}
              alt={slide.alt}
              className="hero-banner-carousel__image"
              fill
            />
          </Box>
        ))}
        settings={{
          modules: [Pagination],
          spaceBetween: 0,
          slidesPerView: 1,
          speed: 500,
          loop: true,
          pagination: {
            clickable: true,
          },
        }}
        className="hero-banner-carousel"
      />
    </Box>
  );
}
