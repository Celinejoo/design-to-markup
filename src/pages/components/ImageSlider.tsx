'use client';

import classNames from 'classnames/bind';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../shared/Card';
import Section from '../shared/Section';
import Title from '../shared/Title';
import styles from './ImageSlider.module.scss';

const cx = classNames.bind(styles);

function ImageSlider() {
  const cardItems = [
    {
      img: '/images/tab1.png',
      alt: '카드',
      title: '첫 번째 카드 제목',
      subtitle: '첫 번째 카드의 설명 텍스트입니다.',
    },
    {
      img: '/images/tab2.png',
      alt: '카드',
      title: '두 번째 카드 제목',
      subtitle: '모든 내용은 테스트 목적의 더미 데이터입니다.',
    },
    {
      img: '/images/tab3.png',
      alt: '카드',
      title: '세 번째 카드 제목',
      subtitle:
        '세 번째 카드의 설명 텍스트입니다.세 번째 카드의 설명 텍스트입니다.세 번째 카드의 설명 텍스트입니다.세 번째 카드의 설명 텍스트입니다.',
    },
  ];

  return (
    <Section className={cx('lightgreen')}>
      <Title
        isColor
        title='이 페이지는 테스트 중입니다'
        subtitle='면접 과제용으로 제작된 샘플 페이지입니다.'
      />

      <Swiper
        spaceBetween={16}
        slidesPerView={1.5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={cx('swiper')}
        grabCursor={true}
        breakpoints={{
          960: {
            slidesPerView: 2.5,
            spaceBetween: 16,
          },
        }}
      >
        {cardItems.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Card
              topContent={<Card.Top imgSrc={item.img} alt={item.alt} />}
              bottomContent={<Card.Bottom title={item.title} subtitle={item.subtitle} />}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}

export default ImageSlider;
