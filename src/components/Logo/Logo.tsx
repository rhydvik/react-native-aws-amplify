import React from 'react';
import { Image, View } from 'react-native';
import { get } from 'lodash';

import styles from './styles';
import { logo } from '../../assets';

type Props = {
  size?: string;
  iconStyle?: any;
  containerStyle?: any;
};

const Logo = ({ size = 'medium', iconStyle, containerStyle }: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Image source={logo} style={[get(styles, [size]), iconStyle]} />
    </View>
  );
};

export default Logo;
