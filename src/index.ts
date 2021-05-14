import { Navigation } from 'react-native-navigation';
import * as Sentry from '@sentry/react-native';
import Amplify from 'aws-amplify';

import configureStore from './redux/configureStore';
import { registerScreen } from './screens';
import { setRNNDefaults, setRoot } from './lib/navigationHelpers';
import { errorHandler } from './lib/errorHandler';
import config from './config/config';
import Loader from './views/loader';

console.log(config, 'config');

Amplify.configure(config);

const SENTRY_DSN =
  'https://d78429d1411549f3814fa5273c0347f9@o434260.ingest.sentry.io/5391092';

if (SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,
    environment: 'dev',
  });
}

const initApp = async (store: any) => {
  registerScreen(store);
  setRNNDefaults();
  setRoot('Loader');
};
let store = null;
const initRedux = () => {
  store = configureStore();
  console.log(store.getState(), 'store');
  try {
    initApp(store);
  } catch (e) {
    errorHandler(e);
  }
};

Navigation.registerComponent('Loader', () => Loader);
Navigation.events().registerAppLaunchedListener(() => initRedux());
