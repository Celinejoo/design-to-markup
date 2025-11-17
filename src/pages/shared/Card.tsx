import classNames from 'classnames/bind';

import styles from './Card.module.scss';
import Typography from './Typography';

const cx = classNames.bind(styles);

interface CardProps {
  topContent: React.ReactNode;
  bottomContent: React.ReactNode;
}

function Card({ topContent, bottomContent }: CardProps) {
  return (
    <div className={cx('card')}>
      <div className={cx('top')}>{topContent}</div>
      <div className={cx('bottom')}>{bottomContent}</div>
    </div>
  );
}

interface TopContentProps {
  imgSrc: string;
  alt: string;
}
function TopContent({ imgSrc, alt }: TopContentProps) {
  return <img src={imgSrc} alt={alt} className={cx('img')} />;
}

interface BottomContentProps {
  title: string;
  subtitle: string;
}

function BottomContent({ title, subtitle }: BottomContentProps) {
  return (
    <>
      <Typography type='Heading2' color='captions' as='p'>
        {title}
      </Typography>
      <Typography type='Paragraph' color='paragraph' as='p' className={cx('subtitle')}>
        {subtitle}
      </Typography>
    </>
  );
}

Card.Top = TopContent;
Card.Bottom = BottomContent;

export default Card;
