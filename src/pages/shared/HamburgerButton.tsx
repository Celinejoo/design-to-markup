import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from './HamburgerButton.module.scss';
const cx = classNames.bind(styles);

type HamburgerButtonProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function HamburgerButton({ setIsMenuOpen, isMenuOpen }: HamburgerButtonProps) {
  const iconSrc = isMenuOpen ? '/images/icon/iconClose.svg' : '/images/icon/iconHamburger.svg';
  const altText = isMenuOpen ? '메뉴 닫기' : '메뉴 열기';
  const ariaLabel = isMenuOpen ? '메뉴 닫기' : '메뉴 열기';

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <button
      className={cx('mobile-button')}
      onClick={handleClick}
      aria-label={ariaLabel}
      aria-expanded={isMenuOpen}
    >
      <Image src={iconSrc} width={24} height={24} alt={altText} priority />
    </button>
  );
}

export default HamburgerButton;
