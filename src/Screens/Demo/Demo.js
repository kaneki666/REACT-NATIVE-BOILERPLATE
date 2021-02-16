import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Demo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    textAlign: 'center',
  },
});

export default Demo;
