import { IPasswordProps } from './password.type';
import cn from 'classnames';

export default function Password({
  className,
  id,
  label,
  ...props
}: IPasswordProps) {
  return (
    <div className={cn('input-field', className)}>
      <label htmlFor={id} className="input-field__label">
        {label && <p className="input-field__label-text">{label}</p>}
        <input
          type="password"
          {...props}
          className="input-field__input input-field--password"
        />
      </label>
    </div>
  );
}
