import Container from '../Container/container';
import ContactBanner from '../ContactBanner/contact-banner';
import ServicesBanner from '../ServicesBanner/services-banner';
import FooterBottom from '../FooterBottom/footer-bottom';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container className="footer__contaner">
        <ServicesBanner />
        <ContactBanner />
        <FooterBottom />
        <div className="footer__copyright">
          <p>© {year} GreenShop. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
