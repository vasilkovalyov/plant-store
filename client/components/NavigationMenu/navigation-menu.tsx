import cn from 'classnames';
import { INavigationProps } from './navigation-menu.type';
import Link from 'next/link';

export default function NavigationMenu({ menu, className }: INavigationProps) {
  return (
    <ul className={cn('navigation-menu', className)}>
      {menu.map((item) => (
        <li key={item.id} className="navigation-menu__item">
          <Link href={item.path} className="navigation-menu__item-link">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
