export interface IPasswordProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'type'> {
  className?: string;
}
