import classNames from 'classnames/bind';

import styles from './TabContent.module.scss';

const cx = classNames.bind(styles);

type TabContentProps = {
  activeTab: string;
  contents: Record<string, React.ReactNode>;
};

function TabContent({ activeTab, contents }: TabContentProps) {
  return <div className={cx('tabContent')}>{contents[activeTab]}</div>;
}

export default TabContent;
