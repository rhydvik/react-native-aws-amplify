/* @flow */

import React from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';
import { get } from 'lodash';
import { PRIMARY } from '../../styles';

const styles = {
  button: { margin: 10 },
  fullWidth: { width: '100%' },
  centered: { justifyContent: 'center', alignItems: 'center' },
  square: { height: 55 },
  round: { height: 55, borderRadius: 30 },
  text: {},
  buttonText: { fontSize: 18, fontFamily: 'Avenir-Black' },
  flexDirection: { flexDirection: 'row' },
  mediumWidth: { width: 300 },
};

type ButtonProps = {
  label: string;
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  buttonType?: string;
  bgColor?: string;
  color?: string;
  style?: any;
  labelStyle?: any;
  container?: any;
};

// TODO show loading indicator based on isLoading

const Button = ({
  label,
  onPress,
  isLoading,
  // disabled,
  buttonType = 'round',
  bgColor,
  color = 'white',
  fullWidth,
  style,
  labelStyle,
  container,
}: ButtonProps) => (
  <TouchableOpacity
    style={[fullWidth ? styles.fullWidth : styles.mediumWidth, container]}
    onPress={onPress}
    // underlayColor="transparent"
  >
    <View
      style={[
        styles.button,
        get(styles, buttonType),
        styles.centered,
        { backgroundColor: bgColor || PRIMARY },
        style,
      ]}
    >
      {isLoading && <ActivityIndicator />}
      <Text style={[styles.buttonText, { color }, labelStyle]}>{label}</Text>
    </View>
  </TouchableOpacity>
);

export default Button;
