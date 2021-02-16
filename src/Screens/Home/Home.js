import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {demoAction} from '../../redux/actions/demoAction';

const Home = () => {
  const dispatch = useDispatch();
  const reduxValue = useSelector((state) => state.AppReducer.number);
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>{reduxValue}</Text>
      <Button title="UseRedux" onPress={() => dispatch(demoAction(1))} />
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

export default Home;
