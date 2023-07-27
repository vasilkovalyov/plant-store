'use client';
import { useState } from 'react';
import Container from '@/components/Container/container';
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
  ]);
  console.log(posts);
  return (
    <div className="section-blog-posts">
      <Container>
        {title && <h2 className="section-blog-posts__title">{title}</h2>}
        {text && <p className="section-blog-posts__text">{text}</p>}
        {posts && posts.length ? (
          <div className="section-blog-posts__grid">
            {posts.map((post) => (
              <div key={post.id} className="section-blog-posts__col">
                <BlogPost {...post} />
              </div>
            ))}
          </div>
        ) : null}
      </Container>
    </div>
  );
}
