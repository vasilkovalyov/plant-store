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

export interface IProduct {
  id: string;
  image?: IImage;
  title: string;
  path: string;
  price: string;
  old_price?: string;
  discount?: string;
}
