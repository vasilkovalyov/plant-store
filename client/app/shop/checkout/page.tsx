import Link from 'next/link';

import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

export default function Checkout() {
  return (
    <Box component="section" className="section-checkout" paddingY={4}>
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Typography variant="body1">Checkout</Typography>
        </Breadcrumbs>
        <Typography variant="h2" textAlign="center">
          Checkout
        </Typography>
      </Container>
    </Box>
  );
}
