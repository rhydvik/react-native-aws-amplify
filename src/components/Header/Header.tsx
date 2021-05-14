// @flow
import React from 'react';
import { View, Text, Animated } from 'react-native';

const styles = {
  container: {
    // marginTop: 20,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
  },
  titleStyle: {
    color: '#0c345e',
    fontSize: 24,
    textAlign: 'center',
  },
  headerStyle: {
    fontSize: 20,
  },
  iconBox: { width: 100, height: 50 },
  flex: { flex: 1 },
};

type HeaderProps = {
  title?: string;
  headerTitle?: any;
  leftButton?: React.ReactNode;
  titleOpacity?: Object;
  rightButton?: React.ReactNode;
  headerOnPress?: Function;
  headerTitleStyle?: Object;
  style?: Object;
  rightIconStyle?: Object;
};

const Header = ({
  titleOpacity,
  leftButton,
  title,
  headerTitleStyle,
  rightButton,
  style,
  rightIconStyle,
}: HeaderProps) => (
  <View style={[styles.container, style]}>
    <View style={styles.iconBox}>{leftButton}</View>
    <Animated.View style={[styles.flex, titleOpacity]}>
      <Text style={[styles.titleStyle, headerTitleStyle]}>{title}</Text>
    </Animated.View>
    <View style={[styles.iconBox, rightIconStyle]}>{rightButton}</View>
  </View>
);

export default Header;
