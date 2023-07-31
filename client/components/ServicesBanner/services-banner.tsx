import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import CtaForm from '../CtaForm/cta-form';
import Service from '../Service/service';
import { IService } from '../Service/service.type';

const services: IService[] = [
  {
    id: 'service-1',
    image: {
      url: '/images/service-1.svg',
      alt: '',
    },
    title: 'Garden Care',
    text: 'We are an online plant shop offering a wide range of cheap and trendy plants.',
  },
  {
    id: 'service-2',
    image: {
      url: '/images/service-2.svg',
      alt: 'Plant Renovation',
    },
    title: 'Plant Renovation',
    text: 'We are an online plant shop offering a wide range of cheap and trendy plants.',
  },
  {
    id: 'service-3',
    image: {
      url: '/images/service-3.svg',
      alt: 'Watering Graden',
    },
    title: 'Watering Graden',
    text: 'We are an online plant shop offering a wide range of cheap and trendy plants.',
  },
];

export default function ServicesBanner() {
  return (
    <Box className="services-banner" paddingY={3}>
      <Container className="services-banner__container">
        <Grid container columnSpacing={2.4} justifyContent="space-between">
          <Grid item md={8} className="services-banner__body">
            <Grid
              container
              columnSpacing={[2, 2, 2, 5.2]}
              className="services-banner__grid"
            >
              {services.map((service) => (
                <Grid
                  key={service.id}
                  item
                  sm={6}
                  md={4}
                  className="services-banner__col"
                >
                  <Service {...service} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={3.8} className="services-banner__aside">
            <CtaForm
              title="Would you like to join newsletters?"
              text="We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
