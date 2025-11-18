import classNames from 'classnames/bind';
import styles from './Title.module.scss';
import Typography from './Typography';

const cx = classNames.bind(styles);

interface TitleProps {
  title: string;
  subtitle?: string;
  isColor?: boolean;
}

function Title({ title, subtitle, isColor }: TitleProps) {
  return (
    <div className={cx('titleWrap')}>
      <Typography type='Heading1' color={isColor ? 'captions' : 'headline'} as='h3'>
        {title}
      </Typography>
      {subtitle && (
        <Typography
          type='Paragraph'
          color={isColor ? 'captions' : 'paragraph'}
          as='p'
          className={cx('subtitle')}
        >
          {subtitle}
        </Typography>
      )}
    </div>
  );
}

export default Title;
