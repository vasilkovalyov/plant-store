import cn from 'classnames';
import Icon from '../Icon/icon';
import { ISocialListProps } from './social-list.type';

export default function SocialList({
  title,
  items,
  className,
}: ISocialListProps) {
  return (
    <div className={cn('social-media', className)}>
      {title && <h6 className="social-media__title">{title}</h6>}
      <ul className="social-media__list">
        {items.map((item) => (
          <li key={item.id} className="social-media__item">
            <a href="#" className="social-media__link">
              <Icon icon={item.icon} className="social-media__icon" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
