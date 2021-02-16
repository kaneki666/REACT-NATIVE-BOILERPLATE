import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {Provider} from 'react-redux';

import RootNavigation from './src/navigation/RootNavigation';
import {store} from './src/redux/store';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 1000);
  }, []);
  return (
    <Provider store={store}>
      <StatusBar hidden={true} />
      <SafeAreaView style={styles.container}>
        <RootNavigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
