import Link from 'next/link';
import Image from 'next/image';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
    <Box className="blog-post">
      {image ? (
        <Link href={path} className="blog-post__image">
          <Image src={image.url} alt={image.alt} width={268} height={200} />
        </Link>
      ) : null}
      <Box className="blog-post__body">
        <Typography
          marginBottom={0.5}
          variant="body1"
          className="blog-post__date"
          fontWeight={500}
        >
          {dayjs(date).format('MMMM DD YYYY')}
        </Typography>
        <Typography variant="h5" className="blog-post__title">
          <Link href={path}>{title}</Link>
        </Typography>
        <Typography
          marginBottom={1}
          variant="body1"
          className="blog-post__text"
        >
          {text}
        </Typography>
        <Link href={path} className="blog-post__link">
          React More
          <Box component="span" marginLeft={0.7} position="relative" top={2}>
            <Icon icon={IconEnum.ArrowRight} size={12} />
          </Box>
        </Link>
      </Box>
    </Box>
  );
}
