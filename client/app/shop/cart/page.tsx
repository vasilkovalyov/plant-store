import Link from 'next/link';

import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

export default function ShopCart() {
  return (
    <Box component="section" className="section-shop-cart" paddingY={4}>
      <Container>
        <Breadcrumbs>
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Typography variant="body1">Shop cart</Typography>
        </Breadcrumbs>
        <Typography variant="h2" textAlign="center">
          Shop cart
        </Typography>
      </Container>
    </Box>
  );
}
