// /* @flow */
// import React, {Component} from 'react';
// import {Navigation} from 'react-native-navigation';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {View} from 'react-native';
// // import SplashScreen from 'react-native-splash-screen';
//
// function registerContainer(containerName: string, generator: Function) {
//   Navigation.registerComponent(containerName, generator);
// }
//
// export function registerContainerWithRedux(
//   containerName: string,
//   comp: any,
//   store: Object,
//   Provider: any,
// ) {
//   const generatorWrapper = () => {
//     const InternalComponent = comp;
//
//     return class Scene extends Component {
//       render() {
//         return (
//           <SafeAreaProvider>
//             <Provider store={store}>
//               <View style={{flex: 1}}>
//                 <InternalComponent {...this.props} />
//               </View>
//             </Provider>
//           </SafeAreaProvider>
//         );
//       }
//     };
//   };
//
//   registerContainer(containerName, generatorWrapper);
// }
//
// export default registerContainerWithRedux;
