import React, { FC } from 'react';

import { CreateProfile } from 'features/create-profile';
import {
  Button, PageBlock, PageLayout, Typography,
} from 'shared/ui';

import styles from './main-page.module.scss';

export const MainPage: FC = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.row}>
          <PageBlock className={styles.profile}>
            profile
          </PageBlock>

          <PageBlock className={styles.player}>
            player
          </PageBlock>
        </div>

        <div className={styles.row}>
          <PageBlock className={styles.artists}>
            artists
          </PageBlock>

          <PageBlock className={styles.tracks}>
            tracks
          </PageBlock>

          <PageBlock className={styles.playlists}>
            playlists
          </PageBlock>
        </div>
      </div>
    </PageLayout>
  );
};
