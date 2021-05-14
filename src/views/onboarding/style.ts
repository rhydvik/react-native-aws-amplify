import { StyleSheet } from 'react-native';
import { PRIMARY, PRIMARY_LIGHT, PRIMARY_TEXT } from '../../styles';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {},
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    height: 150,
    alignItems: 'center',
  },
  skipButton: {
    height: 40,
    marginTop: -10,
  },
  onBoardImage: {
    height: '70%',
    padding: 20,
  },
  descriptionText: {
    fontSize: 20,
    color: PRIMARY_TEXT,
  },
  activeDot: {
    backgroundColor: PRIMARY,
    width: 8,
    height: 8,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    borderWidth: 2,
    borderColor: PRIMARY,
  },
  dot: {
    backgroundColor: PRIMARY_LIGHT,
    width: 6,
    height: 6,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
});
