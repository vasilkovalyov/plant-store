import { IInputProps } from './input.type';
import cn from 'classnames';

export default function Input({
  className,
  id,
  label,
  type = 'text',
  required,
  ...props
}: IInputProps) {
  return (
    <div
      className={cn(
        'input-field',
        {
          'input-field--required': required,
        },
        className
      )}
    >
      <label htmlFor={id} className="input-field__label">
        {label && (
          <p className="input-field__label-text">
            {label} {required ? <span>*</span> : ''}
          </p>
        )}
        <input type={type} {...props} className="input-field__input" />
      </label>
    </div>
  );
}
