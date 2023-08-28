import {useMutation, useQueryClient} from '@tanstack/react-query';
import React, {useState} from 'react';
import {Alert, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {postTodos} from '../queries/reactQueryFunctions';
import {showToast} from '../utils/ToastAndroid';
import Colors from '../common/Colors';

const AddTodoModal = props => {
  const {setModalVisible, modalVisible} = props;
  //   const [modalVisible, setModalVisible] = useState(false);
  console.log('modalVisible-->', modalVisible);

  const [todo, setTodo] = useState('');

  // Access the client
  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation({
    mutationFn: postTodoData =>
      postTodos(postTodoData)
        .then(() => {
          console.log('todo success');
          setModalVisible(false);
          showToast('Todo Added Successfully!');
        })
        .catch(error => console.error('todo error:', error)),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({queryKey: ['todos']});
      setTodo('');
    },
  });

  const addTodoHandler = () => {
    mutation.mutate({
      todoName: todo,
      isComplete: false,
    });
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              label="Add Todo"
              placeholder="add your todo here..."
              style={styles.profile_inputField}
              mode="outlined"
              outlineColor={Colors.Egyptian_Blue}
              activeOutlineColor={Colors.Egyptian_Blue}
              onChangeText={value => setTodo(value)}
              value={todo}
            />
            <View style={styles.buttonGroupContainer}>
              <Button
                icon="clipboard-edit-outline"
                mode="contained"
                style={styles.profile_addTodoButton}
                loading={mutation?.isLoading ? true : false}
                onPress={addTodoHandler}>
                Add Todo
              </Button>
              <Button
                icon="clipboard-edit-outline"
                mode="contained"
                style={styles.profile_addTodoButton}
                onPress={() => setModalVisible(false)}>
                Cancel
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default AddTodoModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.Egyptian_Blue,
    paddingVertical: 20,
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
    backgroundColor: Colors.Light_Cyan_Blue,
  },
  profile_inputField: {
    marginVertical: 10,
    borderRadius: 5,
    color: Colors.Black,
    backgroundColor: Colors.Gray98,
    width: '98%',
  },
  profile_addTodoButton: {
    borderRadius: 5,
    width: 150,
    marginHorizontal: 5,
  },
  buttonGroupContainer: {
    flexDirection: 'row',
  },
});
