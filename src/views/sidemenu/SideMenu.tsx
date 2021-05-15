import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import Header from '../../components/Header';
import IconButton from '../../components/IconButton';
import { menuOpen } from '../../assets';
import styles from './styles';
import Button from '../../components/Button';
import { BACKGROUND, PRIMARY } from '../../styles';
import { setHomeAsAppEntry } from '../../lib/navigationHelpers';

type Props = {
  componentId: string;
};

const SideMenu = ({ componentId }: Props) => {
  const closeMenu = () =>
    Navigation.mergeOptions(componentId, {
      sideMenu: {
        left: {
          visible: false,
        },
      },
    });

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        leftButton={
          <IconButton
            icon={menuOpen}
            onPress={closeMenu}
            iconStyle={styles.menuIcon}
          />
        }
      />
      <View style={styles.itemsContainer}>
        <Button
          label="HOME"
          bgColor={BACKGROUND}
          color={PRIMARY}
          style={styles.menuButton}
          onPress={() => setHomeAsAppEntry('Home')}
        />
        <Button
          label="SETTINGS"
          bgColor={BACKGROUND}
          color={PRIMARY}
          style={styles.menuButton}
          onPress={() => setHomeAsAppEntry('Settings')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SideMenu;
