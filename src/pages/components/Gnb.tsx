import classNames from 'classnames/bind';
import Image from 'next/image';
import { useState } from 'react';
import Button from '../shared/Button';
import DesktopNav from '../shared/DeskTopNav';
import HamburgerButton from '../shared/HamburgerButton';
import LanguageDrodown from '../shared/LanguageDrodown';
import MobileNav from '../shared/MobileNav';
import styles from './Gnb.module.scss';
const cx = classNames.bind(styles);

interface Props {
  isScrolled: boolean;
}

function Gnb({ isScrolled }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={cx('header', !isMenuOpen && 'border', isScrolled && 'scroll')}>
      <h1 className={cx('blind')}>신케카바이오 테스트 페이지</h1>
      <nav className={cx('nav')}>
        <div className={cx('inner')}>
          <h2 className={cx('logo')}>
            <Image src='/images/icon/logo.svg' alt='로고' width={109} height={22} />
          </h2>
          <div className={cx('pc-only')}>
            <DesktopNav />
          </div>
          <div className={cx('mobile-only')}>
            <MobileNav isMenuOpen={isMenuOpen} />
          </div>
        </div>
      </nav>
      <div className={cx('pc-only')}>
        <LanguageDrodown />
        <Button label='Login' varient='primary' />
      </div>
      <div className={cx('mobile-only')}>
        <HamburgerButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
}
export default Gnb;
