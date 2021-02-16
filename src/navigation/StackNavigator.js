import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {screensList} from '../utils/scrensList';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator mode="card">
      {screensList.map((screen, i) => (
        <Stack.Screen
          key={`${i}`}
          options={{
            headerTitle: `${screen.title}`,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 16,
            },
            headerLeft: () => (
              <Icon
                name="dots-three-vertical"
                style={{marginLeft: 10}}
                color="white"
                size={22}
              />
            ),
          }}
          name={screen.title}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigator;
