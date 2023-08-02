import IcoMoon from 'react-icomoon';
import cn from 'classnames';
import iconSet from '../../public/icons/selection.json';
import { IIconProps } from './icon.type';

export default function Icon({
  className,
  width = 20,
  height = 20,
  ...props
}: IIconProps) {
  return (
    <IcoMoon
      iconSet={iconSet}
      width={width}
      height={height}
      {...props}
      className={cn('icon', className)}
    />
  );
}
