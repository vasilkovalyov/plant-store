'use client';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Icon from '../Icon/icon';
import ProductCart from '../ProductCart/product-cart';
import { IconEnum } from '@/types/icons';
import colors from '@/theme/colors';
import { Typography } from '@mui/material';

export default function CartProducts() {
  const [products, setProducts] = useState([
    {
      id: '1',
      image: {
        url: '/images/product-1.jpg',
        alt: 'Barberton Daisy',
      },
      title: 'Barberton Daisy',
      path: '/shop/barberton-daisy',
      price: '119.00',
      code: '1995751877960',
    },
    {
      id: '2',
      image: {
        url: '/images/product-2.jpg',
        alt: 'Angel Wing Begonia',
      },
      title: 'Angel Wing Begonia',
      path: '/shop/angel-wing-begonia',
      price: '169.00',
      code: '1995751877961',
    },
    {
      id: '3',
      image: {
        url: '/images/product-3.jpg',
        alt: 'African Violet',
      },
      title: 'African Violet',
      path: '/shop/african-violet',
      price: '199.00',
      old_price: '229.00',
      discount: '13',
      code: '1995751877962',
    },
  ]);

  function increaseCountProduct(id: string) {
    console.log('increaseCountProduct');
    console.log(id);
  }

  function decreaseCountProduct(id: string) {
    console.log('decreaseCountProduct');
    console.log(id);
  }

  function deleteProduct(id: string) {
    console.log('deleteProduct');
    console.log(id);
  }

  return (
    <Box className="cart-products">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} className="cart-products__table">
          <TableHead>
            <TableRow>
              <TableCell>Products</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell component="th" scope="row">
                  <ProductCart {...product} />
                </TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Button
                      variant="contained"
                      size="small"
                      className="cart-products__button"
                      onClick={() => decreaseCountProduct(product.id)}
                    >
                      <Icon icon={IconEnum.Minus} />
                    </Button>
                    <Typography variant="body2" marginBottom={0}>
                      0
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      className="cart-products__button"
                      onClick={() => increaseCountProduct(product.id)}
                    >
                      <Icon icon={IconEnum.Add} />
                    </Button>
                  </Stack>
                </TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <Button
                    size="small"
                    onClick={() => deleteProduct(product.id)}
                  >
                    <Icon
                      icon={IconEnum.Trash}
                      size={20}
                      color={colors.grey_medium}
                    />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
