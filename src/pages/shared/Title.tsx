import classNames from 'classnames/bind';
import styles from './Title.module.scss';
import Typography from './Typography';

const cx = classNames.bind(styles);

interface TitleProps {
  title: string;
  subtitle?: string;
}

function Title({ title, subtitle }: TitleProps) {
  return (
    <div className={cx('titleWrap')}>
      <Typography type='Heading1' color='black' as='h1'>
        {title}
      </Typography>
      {subtitle && (
        <Typography type='Paragraph' color='paragraph' as='p' className={cx('subtitle')}>
          {subtitle}
        </Typography>
      )}
    </div>
  );
}

export default Title;
