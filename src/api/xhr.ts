/* @flow */
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { get } from 'lodash';

import { Process } from '../types/XhrTypes';

export const process: Process = {
  env: {
    API_BASE_URL: 'http://192.168.0.101:1337/api/v1',
  },
};

export const authApi = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 60 * 1000,
});
export const secureApi = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 60 * 1000,
});

const logRequest = (request: any) => {
  const { method, baseURL, url, headers, params } = request;
  console.log('API', 'Request', method, baseURL, url, headers, params, request);
};

const handleSecureRequest = (config: AxiosRequestConfig) => {
  // const state = store.getState()
  const accessToken = '';
  const { headers } = config;
  if (accessToken) {
    // added accessToken to header
    headers.Authorization = `Bearer ${accessToken}`;
  }
  headers['Content-Type'] =
    'application/json; multipart/form-data; charset=utf-8';
  logRequest(config);
  return config;
};

const handleResponse = (response: AxiosResponse) => {
  console.log('Response', response);
  if (response.data.error === undefined) {
    return get(response, 'data.body', {});
  } else {
    throw response.data.error;
  }
};
const handleRequestError = (error: AxiosError) => {
  console.log('API - Error', error);
  throw error;
};

const handleResponseError = (error?: any) => {
  console.log(JSON.stringify(error), 'error');
  if (
    error.response &&
    (error.response.status === 403 || error.response.status === 401)
  ) {
    console.log('API - Token Expired - signing out user');
  }
  const { status } = error.response;
  console.log('API - Error', error, status);
  console.log('ERROR RESPONSE', error.response);
  throw error;
};

const handleAuthRequest = (config: AxiosRequestConfig) => {
  logRequest(config);
  return config;
};

secureApi.interceptors.request.use(handleSecureRequest, handleRequestError);
secureApi.interceptors.response.use(handleResponse, handleResponseError);

authApi.interceptors.request.use(handleAuthRequest, handleRequestError);
authApi.interceptors.response.use(handleResponse, handleResponseError);
