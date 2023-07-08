import { FC } from 'react';

import { withProviders } from 'app/providers';
import { Routing } from 'pages';
import './styles/index.scss';

const App: FC = () => {
  return <Routing />;
};

export default withProviders(App);
