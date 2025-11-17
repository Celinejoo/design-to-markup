import classNames from 'classnames/bind';

import styels from './Tag.module.scss';
import Typography from './Typography';

const cx = classNames.bind(styels);
interface TagProps {
  label: string;
  variant: 'green' | string;
  className?: string;
}
function Tag({ label, variant = 'green', className }: TagProps) {
  return (
    <div className={cx('tag', variant, className)}>
      <Typography type='Link' color='link'>
        {label}
      </Typography>
    </div>
  );
}

export default Tag;
