import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Auth } from 'aws-amplify';

import Button from '../../components/Button';
import styles from './styles';
import Header from '../../components/Header';
import IconButton from '../../components/IconButton';
import { menu } from '../../assets';
import { setRoot } from '../../lib/navigationHelpers';

type Props = {
  componentId: string;
};

const HomeView = ({ componentId }: Props) => {
  const handleMenuClick = () =>
    Navigation.mergeOptions(componentId, {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        leftButton={
          <IconButton
            icon={menu}
            onPress={handleMenuClick}
            iconStyle={styles.menuIcon}
          />
        }
      />
      <View style={styles.container}>
        {/*<Button*/}
        {/*  label="Open Menu"*/}
        {/*  onPress={() => handleMenuClick()}*/}
        {/*  isLoading={false}*/}
        {/*  disabled={false}*/}
        {/*  buttonType="round"*/}
        {/*  fullWidth*/}
        {/*/>*/}
        <Button
          label="Log Out will change"
          onPress={() => {
            Auth.signOut();
            setRoot('Auth');
          }}
          isLoading={false}
          disabled={false}
          buttonType="round"
          fullWidth
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
