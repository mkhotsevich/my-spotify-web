import React from 'react';

import styles from './create-profile.module.scss';

export const CreateProfile = () => {
  return (
    <button type="button" className={styles.button}>
      Войти с помощью Spotify
    </button>
  );
};
