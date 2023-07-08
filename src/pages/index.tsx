import React, { FC } from 'react';

import { MainPage } from 'pages/main-page';
import { ProfilePage } from 'pages/profile-page';
import { ProfileSettingsPage } from 'pages/profile-settings-page';
import { Route, Routes } from 'react-router-dom';

export const Routing: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
      <Route path="/profile-settings" element={<ProfileSettingsPage />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};
