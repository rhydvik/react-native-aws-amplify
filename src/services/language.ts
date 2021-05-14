import { authApi } from '../api/xhr';
import { Language } from '../types/language';

export const getLanguages = (): Promise<Array<Language>> =>
  authApi.get('/language');
