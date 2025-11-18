import classNames from 'classnames/bind';
import Link from 'next/link';
import { useEffect } from 'react';
import Button from './Button';
import LanguageDrodown from './LanguageDrodown';
import styles from './MobileNav.module.scss';
import Typography from './Typography';

const cx = classNames.bind(styles);

function MobileNav({ isMenuOpen }: { isMenuOpen: boolean }) {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // const handleLinkClick = () => {
  //   setIsMenuOpen(false);
  // };

  return (
    <aside className={cx('mobile-menu', isMenuOpen && 'open')}>
      <nav className={cx('mobile-nav')}>
        <ul>
          <li>
            <Link href='/1'>
              <Typography type='Heading2' color='link'>
                Home
              </Typography>
            </Link>
          </li>
          <li>
            <Link href='/2'>
              <Typography type='Heading2' color='link'>
                Service
              </Typography>
            </Link>
          </li>
          <li>
            <Link href='/2'>
              <Typography type='Heading3' color='link'>
                서비스메뉴 1
              </Typography>
            </Link>
          </li>
          <li>
            <Link href='/2'>
              <Typography type='Heading3' color='link'>
                서비스메뉴 2
              </Typography>
            </Link>
          </li>
          <li>
            <Link href='/2'>
              <Typography type='Heading3' color='link'>
                서비스메뉴 2
              </Typography>
            </Link>
          </li>
          <li>
            <Link href='/2'>
              <Typography type='Heading3' color='link'>
                서비스메뉴 2
              </Typography>
            </Link>
          </li>
        </ul>
      </nav>
      <LanguageDrodown />
      <Button label='Login' varient='primary' size='large' className={cx('mobile-login')} />
    </aside>
  );
}
export default MobileNav;
