'use client';
import { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Container from '../Container/container';
import Icon from '../Icon/icon';
import { IconEnum } from '@/types/icons';
import NavigationMenu from '../NavigationMenu/navigation-menu';
import Button from '../Button/button';
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
        <div className="header__logo">
          <Image
            src="/images/logo.png"
            alt="green shop"
            width={150}
            height={34}
          />
        </div>
        <nav className="header__navigation">
          <NavigationMenu menu={menu} />
          <Button
            color="primary"
            variant="contained"
            className="button-login"
            aria-label="mobile-button-login"
          >
            <Icon icon={IconEnum.Logout} />
            Login
          </Button>
        </nav>
        <div className="header__auth-info">
          <Button>
            <Icon icon={IconEnum.Search} />
          </Button>
          <Button>
            <Icon icon={IconEnum.Cart} />
          </Button>
          <Button
            color="primary"
            variant="contained"
            className="button-login"
            aria-label="desktop-button-login"
          >
            <Icon icon={IconEnum.Logout} />
            Login
          </Button>
          <Button
            className={cn('header__toggler-menu hamburger', {
              active: activeMenu === true,
            })}
            onClick={onToggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Button>
        </div>
      </Container>
    </header>
  );
}
