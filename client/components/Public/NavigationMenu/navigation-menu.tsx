import cn from 'classnames';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { INavigationProps } from './navigation-menu.type';
import Link from 'next/link';

export default function NavigationMenu({ menu, className }: INavigationProps) {
  return (
    <List className={cn('navigation-menu', className)}>
      {menu.map((item) => (
        <ListItem key={item.id} className="navigation-menu__item">
          <Link href={item.path} className="navigation-menu__item-link">
            {item.name}
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
