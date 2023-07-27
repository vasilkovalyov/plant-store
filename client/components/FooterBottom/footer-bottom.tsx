import Image from 'next/image';
import Container from '../Container/container';
import FooterNav from '../FooterNav/footer-nav';
import SocialList from '../SocialList/social-list';

import { footerNav, footerSocialMedia } from './footer-bottom.data';

export default function FooterBottom() {
  return (
    <div className="footer-bottom">
      <Container className="footer-bottom__container">
        <div className="footer-bottom__body">
          <div className="footer-bottom__grid">
            {footerNav.map((nav, index) => (
              <div key={index} className="footer-bottom__col">
                <FooterNav {...nav} />
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom__aside">
          <SocialList
            className="footer-bottom__social-media"
            title="Social Media"
            items={footerSocialMedia}
          />
          <h6 className="footer-bottom__title">We accept</h6>
          <Image
            src="/images/payment.png"
            alt="payment"
            width={224}
            height={26}
          />
        </div>
      </Container>
    </div>
  );
}
