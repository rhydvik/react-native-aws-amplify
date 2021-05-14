import { StyleSheet } from 'react-native';
import { BACKGROUND, PRIMARY } from '../../styles';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  menuButton: {
    alignItems: 'flex-start',
  },
  itemsContainer: { flex: 1, padding: 20 },
  menuIcon: { tintColor: PRIMARY, height: 30, width: 30 },
});
