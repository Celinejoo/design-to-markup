import classNames from 'classnames/bind';

import styles from './Section.module.css';

const cx = classNames.bind(styles);

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  inner?: boolean;
}

function Section({ children, className, inner }: SectionProps) {
  return (
    <section className={cx('container', className)}>
      {inner ? <div className={cx('inner')}>{children}</div> : children}
    </section>
  );
}

export default Section;
