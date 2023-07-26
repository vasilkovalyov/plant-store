import Image from 'next/image';
import { Container } from '../Container/container';
import { Icon } from '../Icon/icon';
import { IconEnum } from '@/types/icons';

export function Header() {
  return (
    <header className="header">
      <Container>
        <Image
          src="/images/logo.png"
          alt="green shop"
          width={150}
          height={34}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
          ipsam.
        </p>
        <a href="#">Link</a>
        <Icon icon={IconEnum.Search} />
      </Container>
    </header>
  );
}
