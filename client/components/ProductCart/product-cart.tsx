import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { IProductCartProps } from './product-cart.type';
import Icon from '../Icon/icon';
import { IconEnum } from '@/types/icons';
import { targetCurrencySymbol } from '@/constants/common';

export default function ProductCart({
  image,
  title,
  path,
  className,
  code,
}: IProductCartProps) {
  return (
    <Box className={cn('product-cart', className)}>
      {image ? (
        <Link href={path} className="product-cart__image">
          <Image src={image.url} alt={image.alt} width={268} height={200} />
        </Link>
      ) : null}
      <Box className="product-cart__body">
        <Typography
          variant="body2"
          className="product-cart__title"
          marginBottom={1}
        >
          <Link href={path}>{title}</Link>
        </Typography>
        <Typography
          variant="body1"
          className="product-cart__code"
          fontWeight={400}
        >
          SKU: <Typography component="span">{code}</Typography>
        </Typography>
      </Box>
    </Box>
  );
}
