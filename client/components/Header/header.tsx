'use client';
import { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Icon from '../Icon/icon';
import { IconEnum } from '@/types/icons';
import NavigationMenu from '../NavigationMenu/navigation-menu';
import { NavigationMenuItemType } from '../NavigationMenu/navigation-menu.type';

const menu: NavigationMenuItemType[] = [
  {
    id: 'home-1',
    name: 'Home',
    path: '/',
  },
  {
    id: 'shop-2',
    name: 'Shop',
    path: '/shop',
  },
  {
    id: 'plant-care-3',
    name: 'Plant care',
    path: '/plant-care',
  },
  {
    id: 'blog-4',
    name: 'Blog',
    path: '/blog',
  },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);

  function onToggleMenu() {
    setActiveMenu(!activeMenu);
  }

  return (
    <header
      className={cn('header', {
        'nav-active': activeMenu,
      })}
    >
      <Container className="header__container">
        <Box className="header__logo">
          <Image
            src="/images/logo.png"
            alt="green shop"
            width={150}
            height={34}
          />
        </Box>
        <nav className="header__navigation">
          <NavigationMenu menu={menu} />
          <Button
            color="primary"
            variant="contained"
            className="button-login"
            aria-label="mobile-button-login"
            size="small"
          >
            <Icon icon={IconEnum.Logout} />
            Login
          </Button>
        </nav>
        <Stack
          className="header__auth-info"
          direction="row"
          alignItems="center"
        >
          <Button variant="text" size="small" className="header__button-icon">
            <Icon icon={IconEnum.Search} />
          </Button>
          <Button variant="text" size="small" className="header__button-icon">
            <Icon icon={IconEnum.Cart} size={26} />
          </Button>
          <Link
            color="primary"
            className="header__button-login"
            aria-label="desktop-button-login"
            href="/auth"
          >
            <Icon icon={IconEnum.Logout} />
            Login
          </Link>
          <button
            className={cn('header__toggler-menu hamburger', {
              active: activeMenu === true,
            })}
            onClick={onToggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </Stack>
      </Container>
    </header>
  );
}
