import React, { FC, HTMLAttributes, memo } from 'react';

import clsx from 'clsx';

import styles from './page-layout.module.scss';

export const PageLayout: FC<HTMLAttributes<HTMLDivElement>> = memo((props) => {
  const { className, ...otherProps } = props;

  return (
    <div className={clsx(styles.pageLayout, className)} {...otherProps} />
  );
});

PageLayout.displayName = 'PageLayout';
