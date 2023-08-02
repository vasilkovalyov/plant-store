import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

import Link from 'next/link';
import { IFooterNavProps } from './footer-nav.type';

export default function FooterNav({ items, title }: IFooterNavProps) {
  return (
    <Box className="footer-nav" marginBottom={2.5}>
      <Typography variant="h6" className="footer-nav__title" marginBottom={1.2}>
        {title}
      </Typography>
      {items.length ? (
        <List className="footer-nav__list">
          {items.map((item) => (
            <ListItem key={item.id} className="footer-nav__list-item">
              <Link href={item.href} className="footer-nav__list-link">
                {item.title}
              </Link>
            </ListItem>
          ))}
        </List>
      ) : null}
    </Box>
  );
}
