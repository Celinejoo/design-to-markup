import classNames from 'classnames/bind';
import Section from '../shared/Section';
import Tag from '../shared/Tag';
import Title from '../shared/Title';
import styles from './hero.module.scss';

const cx = classNames.bind(styles);

const Hero = () => {
  console.log('styles:', styles);
  return (
    <Section>
      <Tag label='Syntekabio' variant='green' className={cx('tag')} />
      <Title
        title='이 페이지는 테스트 중입니다'
        subtitle='면접 과제용으로 제작된 샘플 페이지입니다.'
      />
      <div className={cx('heroBackground')}></div>
    </Section>
  );
};

export default Hero;
