import cn from 'classnames';
import { IContainerProps } from './container.type';

export default function Container({ children, className }: IContainerProps) {
  return <div className={cn('container', className)}>{children}</div>;
}
