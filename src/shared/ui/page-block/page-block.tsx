import React, { FC, HTMLAttributes } from 'react';

import clsx from 'clsx';

import styles from './page-block.module.scss';

export const PageBlock: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <div className={clsx(styles.pageBlock, className)} {...otherProps} />
  );
};
