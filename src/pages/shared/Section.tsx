import classNames from 'classnames/bind';

import styles from './Section.module.css';

const cx = classNames.bind(styles);

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

function Section({ children, className }: SectionProps) {
  return <section className={cx(['container', className])}>{children}</section>;
}

export default Section;
