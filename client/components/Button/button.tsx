import Link from 'next/link';
import cn from 'classnames';
import { IButtonProps } from './button.type';

export default function Button({
  href,
  color,
  variant = 'text',
  children,
  className,
  onClick,
  ...props
}: IButtonProps) {
  const colorClassname = cn({
    'button--primary': color === 'primary',
    'button--secondary': color === 'secondary',
  });

  const variantClassname = cn({
    'button--text': variant === 'text',
    'button--contained': variant === 'contained',
    'button--outline': variant === 'outline',
  });

  if (href) {
    return (
      <Link
        className={cn('button', colorClassname, variantClassname, className)}
        href={href}
        onClick={onClick}
        {...props}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={cn('button', colorClassname, variantClassname, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
