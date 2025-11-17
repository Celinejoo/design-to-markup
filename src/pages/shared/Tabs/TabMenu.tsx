import classNames from 'classnames/bind';
import Typography from '../Typography';
import styles from './TabMenu.module.scss';

const cx = classNames.bind(styles);

type TabMenuProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: string[];
};

export default function TabMenu({ activeTab, setActiveTab, tabs }: TabMenuProps) {
  return (
    <ul className={cx('tab')}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        return (
          <li
            key={tab}
            className={cx('item', { active: isActive })}
            onClick={() => setActiveTab(tab)}
          >
            <Typography type='Heading2' color={isActive ? 'darkGreen' : 'gray'}>
              {tab}
            </Typography>
          </li>
        );
      })}
    </ul>
  );
}
