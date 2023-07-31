import Image from 'next/image';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Icon from '../Icon/icon';
import { IconEnum } from '@/types/icons';

export default function ContactBanner() {
  return (
    <Box className="contact-banner">
      <Container className="contact-banner__container">
        <Box className="contact-banner__logo">
          <Image
            src="/images/logo.png"
            alt="green shop"
            width={150}
            height={34}
          />
        </Box>
        <Stack direction="row" flexWrap="wrap" className="contact-banner__list">
          <Box
            component="li"
            className="contact-banner__list-item"
            display="flex"
            alignItems="center"
          >
            <Icon
              icon={IconEnum.Location}
              className="contact-banner__list-icon"
            />
            <address className="contact-banner__list-address">
              70 West Buckingham Ave. Farmingdale, NY 11735
            </address>
          </Box>
          <Box
            component="li"
            className="contact-banner__list-item"
            display="flex"
            alignItems="center"
          >
            <Icon
              icon={IconEnum.Envelope}
              className="contact-banner__list-icon"
            />
            <a
              href="mailto:contact@greenshop.com"
              className="contact-banner__list-link"
            >
              contact@greenshop.com
            </a>
          </Box>
          <Box
            component="li"
            className="contact-banner__list-item"
            display="flex"
            alignItems="center"
          >
            <Icon icon={IconEnum.Phone} className="contact-banner__list-icon" />
            <a
              href="tel:+88 01911 717 490"
              className="contact-banner__list-link"
            >
              +88 01911 717 490
            </a>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
