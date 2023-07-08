import { FC } from 'react';

import { withProviders } from 'app/providers';
import { Routing } from 'pages';

const App: FC = () => {
  return <Routing />;
};

export default withProviders(App);
