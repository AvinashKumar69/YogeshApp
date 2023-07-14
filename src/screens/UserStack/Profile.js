import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Colors from '../../common/Colors';

const Profile = () => {
  return (
    <View style={styles.profile_topContainer}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile_topContainer: {
    flex: 1,
    backgroundColor: Colors.Gray98,
  },
});
