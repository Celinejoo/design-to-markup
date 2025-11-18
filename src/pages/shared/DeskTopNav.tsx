import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './DeskTopNav.module.scss';
import Typography from './Typography';

const cx = classNames.bind(styles);

function DesktopNav() {
  return (
    <ul className={cx('list')}>
      <li>
        <Link href='/1'>
          <Typography type='Link' color='link'>
            서비스메뉴 1
          </Typography>
        </Link>
      </li>
      <li>
        <Link href='/2'>
          <Typography type='Link' color='link'>
            서비스메뉴 2
          </Typography>
        </Link>
      </li>
      <li>
        <Typography type='Link' color='link'>
          서비스메뉴 3
        </Typography>
      </li>
      <li>
        <Typography type='Link' color='link'>
          서비스메뉴 4
        </Typography>
      </li>
    </ul>
  );
}

export default DesktopNav;
