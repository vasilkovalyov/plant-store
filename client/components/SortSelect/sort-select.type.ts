export interface ISortSelectProps {
  title?: string;
  items: ISortSelectType[];
  defaultSelectTitle?: string;
  onSelect: (value: string) => void;
  className?: string;
}

export interface ISortSelectType {
  id: string;
  title: string;
  value: string;
}
