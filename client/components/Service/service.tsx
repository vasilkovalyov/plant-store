import Image from 'next/image';
import { IService } from './service.type';

export default function Service({ image, text, title }: IService) {
  return (
    <div className="service">
      <div className="service__image">
        <Image src={image.url} alt={image.alt} width={150} height={34} />
      </div>
      <h6 className="service__title">{title}</h6>
      <p className="service__text">{text}</p>
    </div>
  );
}
