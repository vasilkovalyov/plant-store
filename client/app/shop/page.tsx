'use client';
import { useState } from 'react';
import cn from 'classnames';

import Link from 'next/link';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';

import Product from '@/components/Product/product';
import { IProduct } from '@/types/common';
import FilterProducts from '@/components/FilterProducts/filter-products';
import FilterButtons from '@/components/FilterButtons/filter-buttons';
import { IFilterButtonType } from '@/components/FilterButtons/filter-buttons.type';
import SortSelect from '@/components/SortSelect/sort-select';
import { ISortSelectType } from '@/components/SortSelect/sort-select.type';

const sortFields: ISortSelectType[] = [
  {
    id: 'popularity-1',
    title: 'By Popularity',
    value: 'by_popularity',
  },
  {
    id: 'increasing_price-1',
    title: 'By Increasing Price',
    value: 'by_increasing_price',
  },
  {
    id: 'reducing_price-1',
    title: 'By Reducing Price',
    value: 'by_reducing_price',
  },
];

const filterButtonsData: IFilterButtonType[] = [
  {
    id: 'all-1',
    title: 'All Plants',
    value: 'all',
  },
  {
    id: 'new-arrivals-2',
    title: 'New Arrivals',
    value: 'new-arrivals',
  },
  {
    id: 'sale-3',
    title: 'Sale',
    value: 'sale',
  },
];

export default function Shop() {
  const [openFilterOnMobile, setOpenFilterOnMobile] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: '',
      image: {
        url: '/images/product-1.jpg',
        alt: 'Barberton Daisy',
      },
      title: 'Barberton Daisy',
      path: '/',
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
      path: '/',
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
      path: '/',
      price: '199.00',
      old_price: '229.00',
      discount: '13',
      code: '1995751877962',
    },
    {
      id: '4',
      image: {
        url: '/images/product-4.jpg',
        alt: 'Beach Spider Lily',
      },
      title: 'Beach Spider Lily',
      path: '/',
      price: '129.00',
      code: '1995751877963',
    },
    {
      id: '5',
      image: {
        url: '/images/product-5.jpg',
        alt: 'Blushing Bromeliad',
      },
      title: 'Blushing Bromeliad',
      path: '/',
      price: '139.00',
      code: '1995751877964',
    },
    {
      id: '6',
      image: {
        url: '/images/product-6.jpg',
        alt: 'Aluminum Plant',
      },
      title: 'Aluminum Plant',
      path: '/',
      price: '179.00',
      code: '1995751877965',
    },
  ]);

  function onHandleSelectFilterButton(value: string) {
    console.log(value);
  }

  function onHandleSelectSort(value: string) {
    console.log(value);
  }

  function onHandleToggleFilter() {
    setOpenFilterOnMobile(!openFilterOnMobile);
  }

  return (
    <Box component="section" className="section-shop" paddingY={4}>
      <Container>
        <Breadcrumbs>
          <Link href="/">Home</Link>
          <Typography variant="body1">Shop</Typography>
        </Breadcrumbs>
        <Typography variant="h2" marginY={2}>
          Shop
        </Typography>

        <Box className="section-shop__body">
          <FilterProducts
            className={cn({
              active: openFilterOnMobile,
            })}
            onHandleCloseFilterOnMobile={() => {
              setOpenFilterOnMobile(false);
            }}
          />
          <Box className="section-shop__content">
            <Box className="section-shop__filter-bar">
              <FilterButtons
                className="section-shop__filter-buttons"
                items={filterButtonsData}
                onSelect={onHandleSelectFilterButton}
              />
              <SortSelect
                className="section-shop__sort-select"
                title="Short by:"
                items={sortFields}
                onSelect={onHandleSelectSort}
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => onHandleToggleFilter()}
              className="section-shop__filter-open-menu"
            >
              Filter
            </Button>
            <Grid
              container
              columnSpacing={2.5}
              marginBottom={6}
              className="section-shop__product-list"
            >
              {products.map((product) => (
                <Grid key={product.id} item xs={12} sm={4} marginBottom={4}>
                  <Product {...product} />
                </Grid>
              ))}
            </Grid>
            <Box className="section-shop__pagination">
              <Pagination
                count={4}
                variant="outlined"
                shape="rounded"
                siblingCount={0}
                boundaryCount={2}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
