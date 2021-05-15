import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import styles from './styles';
import Header from '../../components/Header';
import IconButton from '../../components/IconButton';
import { menu } from '../../assets';
import { openMenu } from '../../lib/navigationHelpers';

type Props = {
  componentId: string;
};

const Settings = ({ componentId }: Props) => {
  const handleMenuClick = () => openMenu(componentId);

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
        <Text>Chop chop, go back, use menu</Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
