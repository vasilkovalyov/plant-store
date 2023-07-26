import IcoMoon from 'react-icomoon';
import cn from 'classnames';
import iconSet from '../../public/icons/selection.json';
import { IIconProps } from './icon.type';

export function Icon({ className, ...props }: IIconProps) {
  return (
    <IcoMoon
      iconSet={iconSet}
      width={20}
      height={20}
      {...props}
      className={cn('icon', className)}
    />
  );
}
