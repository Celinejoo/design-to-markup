import classNames from 'classnames/bind';
import Image from 'next/image';
import { useState } from 'react';
import styles from './LanguageDrodown.module.scss';
import Typography from './Typography';

const cx = classNames.bind(styles);

function LanguageDrodown() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('한국어');

  const handleLangChange = (lang: string) => {
    setCurrentLang(lang);
    setIsLangOpen(false);
  };
  return (
    <div className={cx('language-dropdown')}>
      <button className={cx('language-selector')} onClick={() => setIsLangOpen(!isLangOpen)}>
        <Image src='/images/icon/iconEarth.svg' width={16} height={16} alt='' />
        <Typography type='Body2' color='paragraph'>
          {currentLang}
        </Typography>
        <Image
          src='/images/icon/iconArrowDown.svg'
          width={12}
          height={12}
          alt='아래 화살표'
          className={cx('icon-arrow', { open: isLangOpen })}
        />
      </button>

      {isLangOpen && (
        <div className={cx('language-menu')}>
          <button
            className={cx('lang-option', { active: currentLang === '한국어' })}
            onClick={() => handleLangChange('한국어')}
          >
            한국어
          </button>
          <button
            className={cx('lang-option', { active: currentLang === 'English' })}
            onClick={() => handleLangChange('English')}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageDrodown;
