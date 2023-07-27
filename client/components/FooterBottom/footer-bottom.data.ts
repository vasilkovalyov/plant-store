import { IconEnum } from '@/types/icons';
import { IFooterNavProps } from '../FooterNav/footer-nav.type';
import { ISocialProps } from '../SocialList/social-list.type';

export const footerNav: IFooterNavProps[] = [
  {
    title: 'My Account',
    items: [
      {
        id: 'account-1',
        title: 'My Account',
        href: '/',
      },
      {
        id: 'account-2',
        title: 'Our stores',
        href: '/',
      },
      {
        id: 'account-3',
        title: 'Contact us',
        href: '/',
      },
      {
        id: 'account-4',
        title: 'Career',
        href: '/',
      },
      {
        id: 'account-5',
        title: 'Specials',
        href: '/',
      },
    ],
  },
  {
    title: 'Help & Guide',
    items: [
      {
        id: 'help-1',
        title: 'Help Center',
        href: '/',
      },
      {
        id: 'help-2',
        title: 'How to Buy',
        href: '/',
      },
      {
        id: 'help-3',
        title: 'Shipping & Delivery',
        href: '/',
      },
      {
        id: 'help-4',
        title: 'Product Policy',
        href: '/',
      },
      {
        id: 'help-5',
        title: 'How to Return',
        href: '/',
      },
    ],
  },
  {
    title: 'Categories',
    items: [
      {
        id: 'categories-1',
        title: 'House Plants',
        href: '/',
      },
      {
        id: 'categories-2',
        title: 'Potter Plants',
        href: '/',
      },
      {
        id: 'categories-3',
        title: 'Seeds',
        href: '/',
      },
      {
        id: 'categories-4',
        title: 'Small Plants',
        href: '/',
      },
      {
        id: 'categories-5',
        title: 'Accessories',
        href: '/',
      },
    ],
  },
];

export const footerSocialMedia: ISocialProps[] = [
  {
    id: 'facebook-1',
    href: '/',
    icon: IconEnum.Facebook,
  },
  {
    id: 'instagram-2',
    href: '/',
    icon: IconEnum.Instagram,
  },
  {
    id: 'twitter-3',
    href: '/',
    icon: IconEnum.Twitter,
  },
  {
    id: 'linkedin-4',
    href: '/',
    icon: IconEnum.Linkedin,
  },
  {
    id: 'youtube-5',
    href: '/',
    icon: IconEnum.Youtube,
  },
];
