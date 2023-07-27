import Link from 'next/link';
import Image from 'next/image';
import { IBlogPostProps } from './blog-post.type';
import Icon from '../Icon/icon';
import { IconEnum } from '@/types/icons';
import dayjs from 'dayjs';

export default function BlogPost({
  image,
  date,
  title,
  text,
  path,
}: IBlogPostProps) {
  return (
    <div className="blog-post">
      <Link href={path} className="blog-post__image">
        <Image src={image.url} alt={image.alt} width={268} height={200} />
      </Link>
      <div className="blog-post__body">
        <span className="blog-post__date">
          {dayjs(date).format('MMMM DD YYYY')}
        </span>
        <h5 className="blog-post__title">
          <Link href={path}>{title}</Link>
        </h5>
        <p className="blog-post__text">{text}</p>
        <Link href={path} className="blog-post__link">
          React More
          <Icon icon={IconEnum.ChevronRight} />
        </Link>
      </div>
    </div>
  );
}
