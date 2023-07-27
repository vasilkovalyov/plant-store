import Image from 'next/image';
import Icon from '../Icon/icon';
import { IconEnum } from '@/types/icons';
import Container from '../Container/container';

export default function ContactBanner() {
  return (
    <div className="contact-banner">
      <Container className="contact-banner__container">
        <div className="contact-banner__logo">
          <Image
            src="/images/logo.png"
            alt="green shop"
            width={150}
            height={34}
          />
        </div>
        <ul className="contact-banner__list">
          <li className="contact-banner__list-item">
            <Icon
              icon={IconEnum.Location}
              className="contact-banner__list-icon"
            />
            <address className="contact-banner__list-address">
              70 West Buckingham Ave. Farmingdale, NY 11735
            </address>
          </li>
          <li className="contact-banner__list-item">
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
          </li>
          <li className="contact-banner__list-item">
            <Icon icon={IconEnum.Phone} className="contact-banner__list-icon" />
            <a
              href="tel:+88 01911 717 490"
              className="contact-banner__list-link"
            >
              +88 01911 717 490
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
}
