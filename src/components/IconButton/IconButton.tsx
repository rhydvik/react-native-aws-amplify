// @flow
import React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';

type IconButtonProps = {
  icon?: any;
  containerStyle?: Object;
  onPress?: any;
  iconStyle?: Object;
  touchStyle?: Object;
  badgeStyle?: Object;
  showBadge?: boolean;
  imageContainerStyle?: Object;
};

const styles = {
  badgeStyle: {
    height: 5,
    width: 5,
    borderRadius: 3,
    backgroundColor: 'red',
    position: 'absolute',
    right: 0,
  },
  imageContainer: { height: 16, width: 20 },
  containerPadding: { padding: 15 },
  imageStyle: { height: 16, width: 20, resizeMode: 'contain' },
};

const IconButton = ({
  icon,
  onPress,
  containerStyle,
  imageContainerStyle,
  iconStyle,
  touchStyle,
  badgeStyle,
  showBadge = false,
}: IconButtonProps) => (
  <TouchableWithoutFeedback onPress={onPress} style={touchStyle}>
    <View style={[styles.containerPadding, containerStyle]}>
      <View style={[styles.imageContainer, imageContainerStyle]}>
        <Image source={icon} style={[styles.imageStyle, iconStyle]} />
        {showBadge && <View style={[styles.badgeStyle, badgeStyle]} />}
      </View>
    </View>
  </TouchableWithoutFeedback>
);

export default IconButton;
