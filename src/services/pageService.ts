import { authApi } from '../api/xhr';
import { Page } from '../types';

export const getAllPages = (): Promise<Array<Page>> => authApi.get('/pages');
