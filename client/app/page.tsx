// import Image from 'next/image';

import SectionHeroBanner from '@/sections/SectionHeroBanner/section-hero-banner';
import SectionBlogPosts from '@/sections/SectionBlogPosts/section-blog-posts';

export default function Home() {
  return (
    <>
      <SectionHeroBanner
        items={[
          {
            url: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80',
            alt: 'image 1',
          },

          {
            url: 'https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            alt: 'image 2',
          },
          {
            url: 'https://images.unsplash.com/photo-1483794344563-d27a8d18014e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            alt: 'image 3',
          },
        ]}
        pretitle="Welcome to GreenShop"
        title="Let’s Make a Better Planet"
        text="We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!"
      />
      <SectionBlogPosts
        title="Our Blog Posts"
        text="We are an online plant shop offering a wide range of cheap and trendy plants. "
      />
    </>
  );
}
