import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DisplayTodo = props => {
  const {DATA} = props;
  console.log('DATA==>', DATA);

  const Item = ({title}) => {
    console.log('title-->', title);
    return (
      <View style={styles.item}>
        <Text style={styles.title}>Todo Name: {title.todoName}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item} />}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default DisplayTodo;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'red',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
