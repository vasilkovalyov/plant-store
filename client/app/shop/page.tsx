import Link from 'next/link';

import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

export default function Shop() {
  return (
    <Box component="section" className="section-shop" paddingY={4}>
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="/">Home</Link>
          <Typography variant="body1">Shop</Typography>
        </Breadcrumbs>
        <Typography variant="h2" textAlign="center">
          Shop
        </Typography>
      </Container>
    </Box>
  );
}
