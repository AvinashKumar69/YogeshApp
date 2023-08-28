import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useQuery} from '@tanstack/react-query';

import Colors from '../../common/Colors';
import {getTodos} from '../../queries/reactQueryFunctions';
import DisplayTodo from '../../components/DisplayTodo';

const UserHome = () => {
  // Queries
  const query = useQuery({queryKey: ['todos'], queryFn: () => getTodos()});
  const DATA = query?.data?.data;
  console.log('query DATA==>', DATA);

  return (
    <View style={styles.home_topContainer}>
      {/* <Text style={styles.home_text}>
        Notification will be{'\n'}displayed here!!
      </Text> */}
      {/* {DATA?.map((item, index) => {
        return <Text key={String(index)}>{item?.todoName}</Text>;
      })} */}
      <DisplayTodo DATA={DATA} />
    </View>
  );
};

export default UserHome;

const styles = StyleSheet.create({
  home_topContainer: {
    flex: 1,
    backgroundColor: Colors.Gray98,
    alignItems: 'center',
    justifyContent: 'center',
  },
  home_text: {
    fontSize: 24,
    textAlign: 'center',
    color: Colors.Black,
  },
});
