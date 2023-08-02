export interface INavigationProps {
  menu: NavigationMenuItemType[];
  className?: string;
}

export type NavigationMenuItemType = {
  id: string;
  name: string;
  path: string;
};
