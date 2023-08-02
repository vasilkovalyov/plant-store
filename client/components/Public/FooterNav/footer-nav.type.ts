export interface IFooterNavLink {
  id: string;
  title: string;
  href: string;
}

export interface IFooterNavProps {
  title: string;
  items: IFooterNavLink[];
}
