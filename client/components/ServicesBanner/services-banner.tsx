import Container from '../Container/container';
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
    <div className="services-banner">
      <Container className="services-banner__container">
        <div className="services-banner__body">
          <div className="services-banner__grid">
            {services.map((service) => (
              <div key={service.id} className="services-banner__col">
                <Service {...service} />
              </div>
            ))}
          </div>
        </div>
        <div className="services-banner__aside">
          <CtaForm
            title="Would you like to join newsletters?"
            text="We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!"
          />
        </div>
      </Container>
    </div>
  );
}
