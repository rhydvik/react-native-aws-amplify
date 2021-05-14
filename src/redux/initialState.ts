// @flow
import { InitialState } from '../types/StateTypes';

const initialState: InitialState = {
  user: { byId: [], showOnBoarding: true },
  language: { list: [], selectedLanguage: 'en', pages: [] },
};

export default initialState;
