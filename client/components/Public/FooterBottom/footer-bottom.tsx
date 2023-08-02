import Image from 'next/image';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import FooterNav from '../FooterNav/footer-nav';
import SocialMedia from '../SocialMedia/social-media';

import { footerNav, footerSocialMedia } from './footer-bottom.data';

export default function FooterBottom() {
  return (
    <Box className="footer-bottom" paddingTop={3.5} paddingBottom={1}>
      <Container className="footer-bottom__container">
        <Grid container spacing={2.4} justifyContent="space-between">
          <Grid item sm={12} md={8} className="footer-bottom__body">
            <Grid
              container
              spacing={[2, 2, 2, 5.2]}
              className="footer-bottom__grid"
            >
              {footerNav.map((nav, index) => (
                <Grid
                  key={index}
                  item
                  xs={6}
                  sm={4}
                  className="footer-bottom__col"
                >
                  <FooterNav {...nav} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={3.8}
            className="footer-bottom__aside"
            marginBottom={2.5}
          >
            <SocialMedia
              className="footer-bottom__social-media"
              title="Social Media"
              items={footerSocialMedia}
            />
            <Typography variant="h6" className="footer-bottom__title">
              We accept
            </Typography>
            <Image
              src="/images/payment.png"
              alt="payment"
              width={224}
              height={26}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
