import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Colors from '../../common/Colors';

const UserHome = () => {
  return (
    <View style={styles.home_topContainer}>
      <Text style={styles.home_text}>
        Notification will be{'\n'}displayed here!!
      </Text>
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
