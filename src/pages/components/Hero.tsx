import classNames from 'classnames/bind';
import Button from '../shared/Button';
import Tag from '../shared/Tag';
import Typography from '../shared/Typography';
import styles from './hero.module.scss';

const cx = classNames.bind(styles);

const Hero = () => {
  console.log('styles:', styles);
  return (
    <div className={cx('hero')}>
      <Typography type='Heading1' color='headline' as='h2'>
        히어로 섹션 commit test
      </Typography>
      <Tag label='text' variant='green' />
      <Button size='medium' varient='grey' label='버튼입니다.' disabled />
    </div>
  );
};

export default Hero;
