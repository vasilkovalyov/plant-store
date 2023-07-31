import Link from 'next/link';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

// custom components
import CtaForm from '@/components/CtaForm/cta-form';
import Service from '@/components/Service/service';
import BlogPost from '@/components/BlogPost/blog-post';
import FooterNav from '@/components/FooterNav/footer-nav';
import SocialMedia from '@/components/SocialMedia/social-media';
import Product from '@/components/Product/product';
import Icon from '@/components/Icon/icon';
import { IconEnum } from '@/types/icons';

export default function Components() {
  return (
    <section className="section-components">
      <Box paddingY={8}>
        <Container>
          <Box marginBottom={4}>
            <Typography variant="h1">Typography 1</Typography>
            <Typography variant="h2">Typography 2</Typography>
            <Typography variant="h3">Typography 3</Typography>
            <Typography variant="h4">Typography 4</Typography>
            <Typography variant="h5">Typography 5</Typography>
            <Typography variant="h6">Typography 6</Typography>
            <Box>
              <Typography variant="body1">Body 1</Typography>
            </Box>
            <Box>
              <Typography variant="body2">Body 2</Typography>
            </Box>
            <Box>
              <Typography variant="caption">Caption</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1">Subtitle 1</Typography>
            </Box>
            <Box>
              <Link href="/">Link</Link>
            </Box>
          </Box>
          <Box marginY={3}>
            <Divider />
          </Box>
          <Box marginBottom={4}>
            <Typography variant="h5" marginBottom={2}>
              Buttons primary
            </Typography>
            <Grid container alignItems="center" marginBottom={2}>
              <Grid item md={3}>
                <Box marginBottom={2}>
                  <Button variant="text" color="primary" size="small">
                    small
                  </Button>
                </Box>
                <Box marginBottom={2}>
                  <Button variant="outlined" color="primary" size="small">
                    small
                  </Button>
                </Box>
                <Box marginBottom={2}>
                  <Button variant="contained" color="primary" size="small">
                    small
                  </Button>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box marginBottom={2}>
                  <Button variant="text" color="primary" size="medium">
                    medium
                  </Button>
                </Box>
                <Box marginBottom={2}>
                  <Button variant="outlined" color="primary" size="medium">
                    medium
                  </Button>
                </Box>
                <Box marginBottom={2}>
                  <Button variant="contained" color="primary" size="medium">
                    medium
                  </Button>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box marginBottom={2}>
                  <Button variant="text" color="primary" size="large">
                    large
                  </Button>
                </Box>
                <Box marginBottom={2}>
                  <Button variant="outlined" color="primary" size="large">
                    large
                  </Button>
                </Box>
                <Box marginBottom={2}>
                  <Button variant="contained" color="primary" size="large">
                    large
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box marginY={3}>
            <Divider />
          </Box>
          <Box marginBottom={4}>
            <Typography variant="h5" marginBottom={2}>
              Text fields
            </Typography>
            <Box marginBottom={2}>
              <InputLabel>First Name</InputLabel>
              <TextField
                placeholder="First Name"
                type="text"
                variant="outlined"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon
                        size={20}
                        icon={true ? IconEnum.Eye : IconEnum.EyeCross}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box>
              <InputLabel>First Name</InputLabel>
              <TextField
                placeholder="First Name"
                type="text"
                variant="outlined"
                fullWidth
                helperText="Helper text"
              />
            </Box>
            <Box>
              <InputLabel>First Name</InputLabel>
              <TextField
                placeholder="First Name"
                type="text"
                variant="outlined"
                fullWidth
                error={true}
                helperText="Helper text"
              />
            </Box>
            <Box marginBottom={2}>
              <InputLabel>Skills</InputLabel>
              <Select>
                <MenuItem disabled value=" ">
                  Select skills
                </MenuItem>
                <MenuItem value="option-1">Option 1</MenuItem>
                <MenuItem value="option-2">Option 2</MenuItem>
                <MenuItem value="option-3">Option 3</MenuItem>
              </Select>
            </Box>
          </Box>
          <Box marginY={3}>
            <Divider />
          </Box>
          <Box marginBottom={4}>
            <Typography variant="h5" marginBottom={2}>
              Footer nav
            </Typography>
            <FooterNav
              title="Footer nav"
              items={[
                {
                  id: '1',
                  href: '/',
                  title: 'Link',
                },
                {
                  id: '2',
                  href: '/',
                  title: 'Link',
                },
                {
                  id: '3',
                  href: '/',
                  title: 'Link',
                },
                {
                  id: '4',
                  href: '/',
                  title: 'Link',
                },
              ]}
            />
          </Box>
          <Box marginY={3}>
            <Divider />
          </Box>
          <Box marginBottom={4}>
            <Typography variant="h5" marginBottom={2}>
              Service
            </Typography>
            <Service
              id={'service-1'}
              image={{
                url: '/images/service-1.svg',
                alt: 'Lorem ipsum dolor',
              }}
              title="Lorem ipsum dolor"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
          </Box>
          <Box marginY={3}>
            <Divider />
          </Box>
          <Box marginBottom={4}>
            <Typography variant="h5" marginBottom={2}>
              Blog post
            </Typography>
            <Box maxWidth={300}>
              <BlogPost
                id={'blog-post-1'}
                image={{
                  url: '/images/02.jpg',
                  alt: 'Lorem ipsum dolor',
                }}
                date="2023-07-20T14:00:00.483Z"
                title="Lorem ipsum dolor"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                path="/"
              />
            </Box>
          </Box>
          <Box marginY={3}>
            <Divider />
          </Box>
          <Box marginBottom={4}>
            <Typography variant="h5" marginBottom={2}>
              Product
            </Typography>
            <Grid container spacing={2}>
              <Grid item md={3}>
                <Product
                  id={'product-1'}
                  image={{
                    url: '/images/product-1.jpg',
                    alt: 'Lorem ipsum dolor',
                  }}
                  title="Lorem ipsum dolor"
                  path="/"
                  price="199.00"
                />
              </Grid>
              <Grid item md={3}>
                <Product
                  id={'product-1'}
                  image={{
                    url: '/images/product-1.jpg',
                    alt: 'Lorem ipsum dolor',
                  }}
                  title="Lorem ipsum dolor"
                  path="/"
                  price="199.00"
                  old_price="229.00"
                />
              </Grid>
              <Grid item md={3}>
                <Product
                  id={'product-1'}
                  image={{
                    url: '/images/product-1.jpg',
                    alt: 'Lorem ipsum dolor',
                  }}
                  title="Lorem ipsum dolor"
                  path="/"
                  price="199.00"
                  old_price="229.00"
                  discount="13"
                />
              </Grid>
            </Grid>
          </Box>
          <Box marginY={3}>
            <Divider />
          </Box>
          <Box marginBottom={4}>
            <Typography variant="h5" marginBottom={2}>
              Form cta
            </Typography>
            <CtaForm
              title="Lorem ipsum dolor sit amet consectetur."
              text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, aspernatur. Ullam assumenda quasi odio!"
            />
          </Box>
          <Box marginY={3}>
            <Divider />
          </Box>
          <Box marginBottom={4}>
            <Typography variant="h5" marginBottom={2}>
              Social Media
            </Typography>
            <SocialMedia
              title="Lorem ipsum dolor sit."
              items={[
                {
                  id: 'facebook-1',
                  href: '/',
                  icon: IconEnum.Facebook,
                },
                {
                  id: 'instagram-2',
                  href: '/',
                  icon: IconEnum.Instagram,
                },
                {
                  id: 'twitter-3',
                  href: '/',
                  icon: IconEnum.Twitter,
                },
                {
                  id: 'linkedin-4',
                  href: '/',
                  icon: IconEnum.Linkedin,
                },
                {
                  id: 'youtube-5',
                  href: '/',
                  icon: IconEnum.Youtube,
                },
              ]}
            />
          </Box>
        </Container>
      </Box>
    </section>
  );
}
