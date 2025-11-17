'use client';

import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Section from '../shared/Section';
import Title from '../shared/Title';
import styles from './Video.module.scss';

const cx = classNames.bind(styles);

const Video = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (inView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView]);

  return (
    <Section>
      <Title
        title='이 페이지는 테스트 중입니다'
        subtitle='면접 과제용으로 제작된 샘플 페이지입니다.'
      />
      <div className={cx('videoWrap')} ref={ref}>
        <video
          ref={videoRef}
          src='/video/main.mp4'
          width={892}
          muted
          playsInline
          poster='/images/videocover.png'
          autoPlay
          className={cx('video')}
        />
      </div>
    </Section>
  );
};

export default Video;
