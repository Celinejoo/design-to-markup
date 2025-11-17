import classNames from 'classnames/bind';
import styles from './hero.module.scss';

const cx = classNames.bind(styles);

const Hero = () => {
  console.log('styles:', styles);
  return (
    <div className={cx('hero')}>
      <p>히어로 섹션 commit test</p>
    </div>
  );
};

export default Hero;
