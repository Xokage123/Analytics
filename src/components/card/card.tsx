import * as React from 'react';

import cn from 'classnames';

import { CardProps } from './type';

import styles from './card.module.scss';

const Card: React.FC<CardProps> = (props) => {
  const { children, className } = props;

  return <div className={cn(styles.container, className)}>{children}</div>;
};

export default Card;
