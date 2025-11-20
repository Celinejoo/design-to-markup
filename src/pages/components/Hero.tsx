import classNames from 'classnames/bind';
import Image from 'next/image';
import Section from '../shared/Section';
import Tag from '../shared/Tag';
import Title from '../shared/Title';
import styles from './Hero.module.scss';
const cx = classNames.bind(styles);

const Hero = () => {
  return (
    <Section inner>
      <Tag label='Syntekabio' variant='green' className={cx('tag')} />
      <Title
        title='이 페이지는 테스트 중입니다'
        subtitle='면접 과제용으로 제작된 샘플 페이지입니다.'
      />
      <div className={cx('heroBackground')}>
        <picture>
          <source srcSet='/images/Ipad.png' media='(min-width: 960px)' />
          <source srcSet='/images/iPhone.png' media='(min-width: 320px)' />
          <Image
            src='/images/Ipad.png'
            alt=''
            width={907}
            height={644}
            className={cx('hero-image')}
          />
        </picture>
      </div>
    </Section>
  );
};

export default Hero;
