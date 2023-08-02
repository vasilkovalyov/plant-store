import { IProduct } from '@/types/common';

export interface IProductCartProps
  extends Pick<IProduct, 'id' | 'image' | 'title' | 'path' | 'code'> {
  className?: string;
}
