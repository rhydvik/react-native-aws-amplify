import AsyncStorage from '@react-native-community/async-storage';
import { persistCombineReducers } from 'redux-persist';

// import {User} from '../../types';

import userReducer from './user';

const config = { key: 'primary', storage: AsyncStorage };
export default persistCombineReducers(config, {
  user: userReducer,
});
