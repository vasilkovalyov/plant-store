import Link from 'next/link';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { IProductProps } from './product.type';
import Icon from '../Icon/icon';
import { IconEnum } from '@/types/icons';

export default function Product({
  image,
  title,
  price,
  discount,
  old_price,
  path,
}: IProductProps) {
  return (
    <Box className="product">
      {image ? (
        <Link href={path} className="product__image">
          {discount ? (
            <Typography
              variant="body2"
              className="product__discount"
              color="white"
              position="absolute"
              top={14}
              left={0}
              zIndex={1}
              paddingX={1}
              paddingY={0.5}
              textTransform="uppercase"
            >
              {discount}% off
            </Typography>
          ) : null}
          <Image src={image.url} alt={image.alt} width={268} height={200} />
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            className="product__buttons-bar"
          >
            <Button variant="text" className="product__button">
              <Icon icon={IconEnum.Cart} />
            </Button>
            <Button variant="text" className="product__button">
              <Icon icon={IconEnum.HeartEmpty} />
            </Button>
          </Stack>
        </Link>
      ) : null}
      <Box className="product__body">
        <Typography variant="h6" className="product__title" fontWeight={400}>
          <Link href={path}>{title}</Link>
        </Typography>
        <Stack direction="row" spacing={1}>
          <Typography
            variant="subtitle1"
            color="primary"
            className="product__price"
          >
            ${price}
          </Typography>
          <Typography
            variant="subtitle1"
            className="product__price product__old-price"
          >
            ${old_price}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
