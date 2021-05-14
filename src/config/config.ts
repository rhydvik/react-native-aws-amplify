import Config from 'react-native-config';

console.log(Config, 'config');

export default {
  aws_project_region: Config.AWS_PROJECT_REGION,
  aws_cognito_identity_pool_id: Config.AWS_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: Config.AWS_COGNITO_REGION,
  aws_user_pools_id: Config.AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id: Config.AWS_WEB_CLIENT_ID,
  aws_appsync_region: Config.AWS_APPSYNC_REGION,
  aws_appsync_authenticationType: Config.AWS_APPSYNC_AUTHENTICATIONTYPE,
};
