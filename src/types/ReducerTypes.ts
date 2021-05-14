import { Language } from './language';
import { User } from './StateTypes';
import { PageObj } from './index';

export interface UserReducer {
  byId: Array<User>;
  showOnBoarding: boolean;
}

export interface LanguageReducer {
  list: Array<Language>;
  selectedLanguage: string;
  pages: PageObj;
}
