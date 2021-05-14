import { LanguageReducer, UserReducer } from './ReducerTypes';

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

export interface InitialState {
  user: UserReducer;
  language: LanguageReducer;
}
