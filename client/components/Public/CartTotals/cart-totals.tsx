import Link from 'next/link';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import CouponField from '../CouponField/coupon-field';

export default function CartTotals() {
  return (
    <Box className="cart-totals">
      <Typography variant="h6">Cart Totals</Typography>
      <Box marginY={2}>
        <Divider className="cart-totals__devider" />
      </Box>
      <CouponField />
      <List className="cart-totals__list">
        <ListItem className="cart-totals__list-item">
          <Typography
            variant="body2"
            className="cart-totals__title-category"
            marginBottom={0}
          >
            Subtotal
          </Typography>
          <Typography
            variant="subtitle1"
            className="cart-totals__price-category"
            marginBottom={0}
          >
            $2,683.00
          </Typography>
        </ListItem>
        <ListItem className="cart-totals__list-item">
          <Typography
            variant="body2"
            className="cart-totals__title-category"
            marginBottom={0}
          >
            Coupon Discount
          </Typography>
          <Typography
            variant="subtitle1"
            className="cart-totals__price-category"
            marginBottom={0}
          >
            (-) 00.00
          </Typography>
        </ListItem>
        <ListItem className="cart-totals__list-item">
          <Typography
            variant="body2"
            className="cart-totals__title-category"
            marginBottom={0}
          >
            Shiping
          </Typography>
          <Typography
            variant="subtitle1"
            className="cart-totals__price-category"
            marginBottom={0}
          >
            $16.00
          </Typography>
        </ListItem>
        <ListItem className="cart-totals__list-item">
          <Box marginY={2} width="100%">
            <Divider className="cart-totals__devider" />
          </Box>
        </ListItem>
        <ListItem className="cart-totals__list-item">
          <Typography
            variant="subtitle1"
            className="cart-totals__title-total"
            marginBottom={0}
          >
            Total
          </Typography>
          <Typography
            variant="subtitle1"
            color="primary"
            className="cart-totals__price-total"
            marginBottom={0}
          >
            $2,699.00
          </Typography>
        </ListItem>
      </List>
      <Button fullWidth variant="contained" color="primary">
        Proceed To Checkout
      </Button>
      <Link href="/shop" className="cart-totals__link-shop">
        Continue Shopping
      </Link>
    </Box>
  );
}
