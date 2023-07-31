import { IconEnum } from '@/types/icons';

export interface ISocialProps {
  id: string;
  icon: IconEnum;
  href: string;
}

export interface ISocialListProps {
  title?: string;
  items: ISocialProps[];
  className?: string;
}
