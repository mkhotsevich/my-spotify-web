import { FC, memo } from 'react';


export const LoginButton: FC = memo(() => {
  return (
    <button type="button" >
      Создать профиль с помощью Spotify
    </button>
  );
});

LoginButton.displayName = 'LoginButton';
