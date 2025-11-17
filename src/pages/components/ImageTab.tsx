import classNames from 'classnames/bind';
import Section from '../shared/Section';

import Tab from '../shared/Tab';
import Title from '../shared/Title';
import styles from './ImageTab.module.scss';

const cx = classNames.bind(styles);

const ImageTab = () => {
  return (
    <Section>
      <Title
        title='이 페이지는 테스트 중입니다'
        subtitle='면접 과제용으로 제작된 샘플 페이지입니다.'
      />
      <Tab />
    </Section>
  );
};

export default ImageTab;
