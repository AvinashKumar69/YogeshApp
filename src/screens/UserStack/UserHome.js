import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

import Colors from '../../common/Colors';
import TodoCard from '../../components/TodoCard';
import {getTodos} from '../../queries/reactQueryFunctions';

const UserHome = () => {
  // Queries
  const {isLoading, isError, data, error} = useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodos(),
  });
  const TodoData = data?.data;

  // if (isLoading) {
  //   return <ActivityIndicator size="large" color="#00ff00" />;
  // }

  // if (isError) {
  //   return <Text>Error: {error.message}</Text>;
  // }

  return (
    <View style={styles.home_topContainer}>
      <Text style={styles.home_text}>
        Your todo will be{'\n'}displayed here!!
      </Text>
      {isLoading ? (
        <View style={styles.home_loaderContainer}>
          <ActivityIndicator size={100} color={Colors.Egyptian_Blue} />
        </View>
      ) : isError ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <TodoCard TodoData={TodoData} />
      )}
    </View>
  );
};

export default UserHome;

const styles = StyleSheet.create({
  home_topContainer: {
    flex: 1,
    backgroundColor: Colors.Gray98,
  },
  home_text: {
    fontSize: 24,
    textAlign: 'center',
    color: Colors.Black,
  },
  home_loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
