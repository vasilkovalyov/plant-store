export interface IFilterButtonsProps {
  items: IFilterButtonType[];
  onSelect: (value: string) => void;
  className?: string;
}

export interface IFilterButtonType {
  id: string;
  title: string;
  value: string;
}
