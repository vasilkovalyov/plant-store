import Container from '../Container/container';
import ContactBanner from '../ContactBanner/contact-banner';
import ServicesBanner from '../ServicesBanner/services-banner';

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__contaner">
        <ServicesBanner />
        <ContactBanner />
      </Container>
    </footer>
  );
}
