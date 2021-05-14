import * as Sentry from '@sentry/react-native';

export const errorHandler = (error: any) => {
  console.log(error);
  Sentry.captureException(error);
};
