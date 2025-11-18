import classNames from 'classnames/bind';

import styles from './Button.module.scss';
import Typography from './Typography';

const cx = classNames.bind(styles);

interface ButtonProps {
  size?: 'xlarge' | 'large' | 'medium' | 'small';
  varient?: 'primary' | 'grey';
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  full?: boolean;
  onClick?: () => void;
}

function Button({
  size = 'medium',
  varient = 'grey',
  label,
  icon,
  disabled,
  className,
  full,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={cx('button', size, varient, className, full && 'full')}
      onClick={onClick}
      disabled={disabled}
      type='button'
    >
      {icon && icon}
      <Typography type='Body1' color='white'>
        {label}
      </Typography>
      {icon && icon}
    </button>
  );
}
export default Button;
