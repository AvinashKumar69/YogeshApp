import {useMutation, useQueryClient} from '@tanstack/react-query';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Button, Card, Text} from 'react-native-paper';

import Colors from '../common/Colors';
import {deleteTodos} from '../queries/reactQueryFunctions';

const TodoCard = ({TodoData}) => {
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

  const Item = item => {
    // console.log('item here -->', item);
    const todo = item?.item;
    return (
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium" numberOfLines={1}>
            Todo Name: {todo?.todoName}
          </Text>
          <Text variant="bodySmall">
            Todo Status: {todo?.isComplete ? 'Completed' : 'Not Completed'}
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button
            icon="delete"
            onPress={() => deleteTodoHandler(todo._id)}
            loading={mutation?.isLoading ? true : false}>
            Delete
          </Button>
          {/* <Button
            icon="circle-edit-outline"
            onPress={() => console.log('edit button pressed')}
            loading={true}>
            Edit
          </Button> */}
        </Card.Actions>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={TodoData}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item?._id}
      />
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Gray98,
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
  card: {
    marginHorizontal: '2%',
    marginVertical: 2,
    elevation: 0,
    backgroundColor: Colors.Jody_Blue,
  },
});
