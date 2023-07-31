import Link from 'next/link';

import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

export default function Blog() {
  return (
    <Box component="section" className="section-blogs" paddingY={4}>
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="/">Home</Link>
          <Typography variant="body1">Blog</Typography>
        </Breadcrumbs>
        <Typography variant="h2" textAlign="center">
          Blogs
        </Typography>
      </Container>
    </Box>
  );
}
