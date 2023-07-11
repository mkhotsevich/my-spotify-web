import React, { FC, HTMLAttributes } from 'react';

import clsx from 'clsx';

import styles from './typography.module.scss';
import { getAs } from '../libs/get-as';
import { Size } from '../model/types';

type Props = HTMLAttributes<HTMLDivElement> & {
  size: Size
}

export const Typography: FC<Props> = ({ size, className, ...params }) => {
  const As = getAs(size);

  return (
    <As
      className={clsx(styles.common, {
        [styles.h1]: size === 'h1',
        [styles.h2]: size === 'h2',
        [styles.h3]: size === 'h3',
        [styles.pb]: size === 'pb',
        [styles.p]: size === 'p',
        [styles.caption]: size === 'caption',
      }, className)}
      {...params}
    />
  );
};
