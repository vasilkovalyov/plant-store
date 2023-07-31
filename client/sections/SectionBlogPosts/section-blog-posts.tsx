'use client';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { ISectionBlogPostsProps } from './section-blog-posts.type';
import { IBlogPostProps } from '@/components/BlogPost/blog-post.type';
import BlogPost from '@/components/BlogPost/blog-post';

export default function SectionBlogPost({
  title,
  text,
}: ISectionBlogPostsProps) {
  const [posts, setPosts] = useState<IBlogPostProps[]>([
    {
      id: '1',
      image: {
        url: '/images/02.jpg',
        alt: 'Top 10 Succulents for Your Home',
      },
      date: '2023-07-27T19:54:38.483Z',
      path: '/',
      text: 'Best in hanging baskets. Prefers medium to high light.',
      title: 'Top 10 Succulents for Your Home',
    },
    {
      id: '2',
      image: {
        url: '/images/03.jpg',
        alt: 'Cacti & Succulent Care Tips',
      },
      date: '2023-07-20T14:00:00.483Z',
      path: '/',
      text: 'Cacti and succulents thrive in containers and because most are..',
      title: 'Cacti & Succulent Care Tips',
    },
    {
      id: '3',
      image: {
        url: '/images/04.jpg',
        alt: 'Best Houseplants Room by Room',
      },
      date: '2023-07-23T11:24:18.483Z',
      path: '/',
      text: 'The benefits of houseplants are endless. In addition to..',
      title: 'Best Houseplants Room by Room',
    },
    {
      id: '4',
      image: {
        url: '/images/01.jpg',
        alt: 'Top 10 Succulents for Your Home',
      },
      date: '2023-07-27T19:54:38.483Z',
      path: '/',
      text: 'Best in hanging baskets. Prefers medium to high light.',
      title: 'Top 10 Succulents for Your Home',
    },
  ]);
  console.log(posts);
  return (
    <Box component="section" className="section-blog-posts">
      <Container>
        {title && (
          <Typography variant="h2" textAlign="center" marginBottom={2}>
            {title}
          </Typography>
        )}
        {text && (
          <Typography variant="body1" textAlign="center" marginBottom={4}>
            {text}
          </Typography>
        )}
        {posts && posts.length ? (
          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid
                key={post.id}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                display="flex"
              >
                <BlogPost {...post} />
              </Grid>
            ))}
          </Grid>
        ) : null}
      </Container>
    </Box>
  );
}
