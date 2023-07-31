export interface IImage {
  url: string;
  alt: string;
}

export interface IBlogPost {
  id: string;
  image?: IImage;
  date: string;
  title: string;
  text: string;
  path: string;
}
