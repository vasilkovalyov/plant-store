import Link from 'next/link';
import { IFooterNavProps } from './footer-nav.type';

export default function FooterNav({ items, title }: IFooterNavProps) {
  return (
    <div className="footer-nav">
      <h6 className="footer-nav__title">{title}</h6>
      {items.length ? (
        <ul className="footer-nav__list">
          {items.map((item) => (
            <li key={item.id} className="footer-nav__list-item">
              <Link href={item.href} className="footer-nav__list-link">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
