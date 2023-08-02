export interface IFilterCategoryProps {
  title: string;
  items: IFilterCategory[];
}

export interface IFilterCategory {
  id: string;
  title: string;
  count: number;
}
