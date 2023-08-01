import cn from 'classnames';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import FilterCategory from '../FilterCategory/filter-category';
import FilterRange from '../FilterRange/filter-range';
import { IFilterCategoryProps } from '../FilterCategory/filter-category.type';
import { IFilterProductsProps } from './filter-products.type';

type CategoriesType = {
  id: string;
  category: IFilterCategoryProps;
};

const categories: CategoriesType[] = [
  {
    id: '1',
    category: {
      title: 'Categories',
      items: [
        {
          id: '10',
          count: 33,
          title: 'House Plants',
        },
        {
          id: '11',
          count: 12,
          title: 'Potter Plants',
        },
        {
          id: '12',
          count: 65,
          title: 'Seeds',
        },
        {
          id: '13',
          count: 39,
          title: 'Small Plants',
        },
        {
          id: '14',
          count: 23,
          title: 'Big Plants',
        },
        {
          id: '15',
          count: 17,
          title: 'Succulents',
        },
        {
          id: '16',
          count: 19,
          title: 'Trerrariums',
        },
        {
          id: '17',
          count: 13,
          title: 'Gardening',
        },
        {
          id: '18',
          count: 18,
          title: 'Accessories',
        },
      ],
    },
  },
  {
    id: '2',
    category: {
      title: 'Size',
      items: [
        {
          id: '20',
          count: 119,
          title: 'Small',
        },
        {
          id: '21',
          count: 86,
          title: 'Medium',
        },
        {
          id: '22',
          count: 78,
          title: 'Large',
        },
      ],
    },
  },
];

export default function FilterProducts({
  className,
  onHandleCloseFilterOnMobile,
}: IFilterProductsProps) {
  return (
    <Box component="aside" className={cn('filter-products', className)}>
      {categories.map((category) => (
        <FilterCategory key={category.id} {...category.category} />
      ))}
      <FilterRange title="Price" />
      <Stack direction="row" flexWrap="wrap" spacing={1}>
        <Button variant="contained" color="primary" size="small">
          Filter
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            onHandleCloseFilterOnMobile && onHandleCloseFilterOnMobile();
          }}
          className="filter-products__close-filter-mobile"
        >
          Close
        </Button>
      </Stack>
    </Box>
  );
}
