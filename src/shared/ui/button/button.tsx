import { FC, HTMLAttributes, memo } from 'react';

import clsx from 'clsx';
import { Typography } from 'shared/ui';

import styles from './button.module.scss';

export const Button: FC<HTMLAttributes<HTMLButtonElement>> = memo((props) => {
  const { className, children, ...otherProps } = props;

  return (
    <button type="button" className={clsx(styles.button, className)} {...otherProps}>
      <Typography size="pb">{children}</Typography>
    </button>
  );
});

Button.displayName = 'Button';
