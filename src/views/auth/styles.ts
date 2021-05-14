import { StyleSheet } from 'react-native';
import { PRIMARY, PRIMARY_TEXT, SECONDARY_TEXT } from '../../styles';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 60,
  },
  container: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 24,
    color: PRIMARY_TEXT,
    fontWeight: '700',
  },
  subHeader: {
    fontSize: 16,
    color: SECONDARY_TEXT,
  },
  inputContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  inputContainerStyle: {
    borderColor: PRIMARY,
  },
});
