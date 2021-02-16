import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNavigator from './StackNavigator';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
