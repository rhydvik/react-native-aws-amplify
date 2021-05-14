import { StyleSheet } from 'react-native';
import { PRIMARY } from '../../styles';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: { tintColor: PRIMARY, height: 30, width: 30 },
});
