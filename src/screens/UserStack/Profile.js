import {yupResolver} from '@hookform/resolvers/yup';
import {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Divider, TextInput, Button} from 'react-native-paper';
import * as yup from 'yup';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import Colors from '../../common/Colors';
import {postTodos} from '../../queries/reactQueryFunctions';

const Profile = () => {
  const schema = yup
    .object({
      firstName: yup
        .string('Should be string')
        .required('Required field')
        .min(3, 'Atleast 3 characters')
        .max(10, 'Up to 10 characters'),
      lastName: yup
        .string('Should be string')
        .required('Required field')
        .min(3, 'Atleast 3 characters')
        .max(10, 'Up to 10 characters'),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    getValues,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
    resolver: yupResolver(schema),
  });

  const handleGetValue = () => {
    const values = getValues();
    console.log(values);
  };

  // * form submission handler
  const onSubmit = data => console.log(data);

  // // Access the client
  // const queryClient = useQueryClient();

  // // Mutations
  // const mutation = useMutation({
  //   mutationFn: postTodoData =>
  //     postTodos(postTodoData)
  //       .then(() => {
  //         console.log('todo success');
  //       })
  //       .catch(error => console.error('todo error:', error)),
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({queryKey: ['todos']});
  //     setTodo('');
  //   },
  // });

  // const [todo, setTodo] = useState('');
  // // console.log('todo-->', todo);

  // const addTodoHandler = () => {
  //   mutation.mutate({
  //     todoName: todo,
  //     isComplete: false,
  //   });
  // };

  return (
    <View style={styles.profile_topContainer}>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[
              styles.profile_inputField,
              {
                borderColor: errors.firstName
                  ? Colors.Red
                  : Colors.Egyptian_Blue,
              },
            ]}
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && (
        // <Text style={styles.profile_errorText}>This is required.</Text>
        <Text style={styles.profile_errorText}>
          {errors.firstName?.message}
        </Text>
      )}

      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[
              styles.profile_inputField,
              {
                borderColor: errors.lastName
                  ? Colors.Red
                  : Colors.Egyptian_Blue,
              },
            ]}
            placeholder="Last name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />
      {errors.lastName && (
        // <Text style={styles.profile_errorText}>This is required.</Text>
        <Text style={styles.profile_errorText}>{errors.lastName?.message}</Text>
      )}

      <Pressable onPress={handleSubmit(onSubmit)}>
        <Text>I'm pressable!</Text>
      </Pressable>

      <Pressable onPress={handleGetValue}>
        <Text>getValues</Text>
      </Pressable>

      <Divider style={styles.profile_divider} />

      {/* <Text style={styles.profile_todoTopHeading}>Manage Your Todo Here:</Text>

      <TextInput
        label="Add Todo"
        placeholder="add your todo here..."
        style={styles.profile_inputField}
        type="outlined"
        outlineColor="red"
        activeOutlineColor="red"
        onChangeText={value => setTodo(value)}
        value={todo}
      />
      <Button
        icon="clipboard-edit-outline"
        mode="contained"
        style={styles.profile_addTodoButton}
        onPress={addTodoHandler}>
        Add Todo
      </Button> */}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile_topContainer: {
    flex: 1,
    backgroundColor: Colors.Gray98,
    paddingHorizontal: 10,
  },
  profile_inputField: {
    // borderWidth: 1,
    // borderColor: Colors.Egyptian_Blue,
    marginVertical: 10,
    borderRadius: 5,
    color: Colors.Black,
    backgroundColor: Colors.Gray98,
  },
  profile_errorText: {
    color: Colors.Red,
    fontSize: 14,
  },
  profile_divider: {
    height: 5,
    width: '100%',
    backgroundColor: Colors.Egyptian_Blue,
    marginVertical: '2%',
  },
  profile_todoTopHeading: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.Black,
  },
  profile_addTodoButton: {
    borderRadius: 5,
  },
});
