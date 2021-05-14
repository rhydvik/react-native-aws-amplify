import React, { useEffect, useState } from 'react';
import { SafeAreaView, ActivityIndicator } from 'react-native';
import { Auth } from 'aws-amplify';

import styles from './styles';
import { setRoot } from '../../lib/navigationHelpers';

type Props = {
  componentId: string;
};

const Loader = ({ componentId }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(res => {
        console.log(res, componentId);
        setRoot('Home');
      })
      .catch(err => {
        console.log(err);
        setRoot('Auth');
      })
      .finally(() => setIsLoading(false));
  }, [componentId]);
  return (
    <SafeAreaView style={styles.safeArea}>
      {isLoading && <ActivityIndicator color="red" />}
    </SafeAreaView>
  );
};

export default Loader;
