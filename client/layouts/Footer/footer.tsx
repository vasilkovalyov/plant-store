import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ContactBanner from '../../components/Public/ContactBanner/contact-banner';
import ServicesBanner from '../../components/Public/ServicesBanner/services-banner';
import FooterBottom from '../../components/Public/FooterBottom/footer-bottom';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <ServicesBanner />
      <ContactBanner />
      <FooterBottom />
      <Box paddingY={1.5}>
        <Typography variant="body1" textAlign="center">
          © {year} GreenShop. All Rights Reserved.
        </Typography>
      </Box>
    </footer>
  );
}
