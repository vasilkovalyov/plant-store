import Link from 'next/link';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CartProducts from '@/components/Public/CartProducts/cart-products';
import CartTotals from '@/components/Public/CartTotals/cart-totals';

export default function ShopCart() {
  return (
    <Box component="section" className="section-shop-cart" paddingY={4}>
      <Container>
        <Breadcrumbs>
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Typography variant="body1">Shop cart</Typography>
        </Breadcrumbs>
        <Typography variant="h2" marginY={2}>
          Shop cart
        </Typography>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} lg={7}>
            <CartProducts />
          </Grid>
          <Grid item xs={12} lg={4}>
            <CartTotals />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
