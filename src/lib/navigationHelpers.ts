import { Navigation } from 'react-native-navigation';
import { Dimensions } from 'react-native';

import { BACKGROUND } from '../styles';

export function setRNNDefaults() {
  Navigation.setDefaultOptions({
    layout: {
      backgroundColor: BACKGROUND,
      orientation: ['portrait'], // An array of supported orientations
      // modalPresentationStyle: 'overCurrentContext',
    },
    topBar: {
      visible: false,
      noBorder: true,
      // background: {
      //     color: colors.BACKGROUND,
      // },
      drawBehind: true,
      // transparent: true, // iOS only
      // buttonColor: colors.PRIMARY,
      // backButtonImage: arrowLeft,
      backButton: {
        // title: '', // iOS only
        showTitle: false, // iOS only
        visible: true,
      },
    },
    bottomTabs: {
      drawBehind: false,
    },
    bottomTab: {
      iconColor: '#b0bec5',
      textColor: '#b0bec5',
      selectedIconColor: '#37474f',
      selectedTextColor: '#37474f',
    },
    statusBar: {
      style: 'light',
      visible: true,
    },
    // animations: {
    //   push: {
    //     waitForRender: true,
    //   },
    // },
  });
}

// why can't we use react-native side-menu
// https://github.com/wix/react-native-navigation/issues/4890
// If needed separate menu you can use this
// https://github.com/aspect-apps/react-native-navigation-drawer-extension

export const setHomeAsAppEntry = (screen: string, props?: any) => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        center: {
          stack: {
            id: 'AppStack',
            children: [
              {
                component: {
                  name: screen,
                  passProps: props,
                  options: {
                    topBar: { visible: false },
                    statusBar: {
                      style: 'light',
                      visible: true,
                    },
                    animations: {
                      push: {
                        waitForRender: true,
                      },
                    },
                  },
                },
              },
            ],
          },
        },
        left: {
          component: {
            name: 'SideMenu',
          },
        },
        options: {
          sideMenu: {
            left: {
              width: Dimensions.get('window').width + 10,
            },
          },
        },
      },
    },
  });
};

export const setRoot = (screen: string, props?: any) =>
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: screen,
              passProps: props,
            },
          },
        ],
      },
    },
  });

export const pushScreen = (
  componentId: string,
  screen: string,
  props?: any,
) => {
  Navigation.push(componentId, {
    component: {
      name: screen,
      passProps: props,
      options: {
        bottomTabs: {
          visible: false,
        },
        animations: {
          push: {
            // waitForRender: true,
          },
        },
      },
    },
  });
};

export const popScreen = (componentId: string) => Navigation.pop(componentId);

export const dismissModal = (componentId: string) =>
  Navigation.dismissModal(componentId);

export const showModal = (screen: string, props: Object) =>
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: screen,
            passProps: props,
          },
        },
      ],
    },
  });

export const openMenu = (componentId: string) =>
  Navigation.mergeOptions(componentId, {
    sideMenu: {
      left: {
        visible: true,
      },
    },
  });
