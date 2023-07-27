export interface IButtonProps {
  href?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: 'contained' | 'text' | 'outline';
  color?: 'primary' | 'secondary';
  'aria-label'?: string;
  onClick?: (e: any) => void;
}
