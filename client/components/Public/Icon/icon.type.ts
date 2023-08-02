import { IconEnum } from '@/types/icons';
import { IconProps } from 'react-icomoon';

export interface IIconProps extends Omit<IconProps, 'icon'> {
  icon: IconEnum;
  className?: string;
}
