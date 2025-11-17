import classNames from 'classnames/bind';
import React, { JSX } from 'react';

import { TypographyType } from './../styles/typography';

import { ColorToken } from '../styles/color';
import styles from './Typography.module.scss';
const cx = classNames.bind(styles);

interface TypographyProps {
  type: TypographyType;
  color: ColorToken;
  children?: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

function Typography({ type, children, className, color, as: Component = 'span' }: TypographyProps) {
  return <Component className={cx(type, color, className)}>{children}</Component>;
}

export default Typography;
