import React, { FC } from 'react';

import { CreateProfile } from 'features/create-profile';

import styles from './main-page.module.scss';

export const MainPage: FC = () => {
  return (
    <div className={styles.mainPage}>
      <CreateProfile />
    </div>
  );
};
