export interface IBlogPostProps {
  id: string;
  image: {
    url: string;
    alt: string;
  };
  date: string;
  title: string;
  text: string;
  path: string;
}
