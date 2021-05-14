import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import * as Views from './views';
import { InitialState } from './types/StateTypes';

export function registerScreen(store: InitialState) {
  // Navigation.registerComponent('Home', () => Views.HomeView);
  Navigation.registerComponentWithRedux(
    'Home',
    () => Views.HomeView,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'OnBoarding',
    () => Views.OnBoarding,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'SideMenu',
    () => Views.SideMenu,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'Auth',
    () => Views.AuthScreen,
    Provider,
    store,
  );
}
