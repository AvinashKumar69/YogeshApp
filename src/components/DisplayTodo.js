import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {deleteTodos} from '../queries/reactQueryFunctions';

const DisplayTodo = props => {
  const {DATA} = props;
  //   console.log('DATA==>', DATA);

  // Access the client
  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation({
    mutationFn: iD =>
      deleteTodos(iD)
        .then(() => {
          console.log('todo deleted');
        })
        .catch(error => console.error('todo error:', error)),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({queryKey: ['todos']});
    },
  });

  const deleteTodoHandler = id => {
    mutation.mutate({
      iD: id,
    });
  };

  const Item = ({title}) => {
    // console.log('title-->', title);
    return (
      <View style={styles.item}>
        <Text style={styles.title}>Todo Name: {title.todoName}</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => deleteTodoHandler(title._id)}>
          <Text>Delete Todo</Text>
        </TouchableOpacity>
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
