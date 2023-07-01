import React, {useContext, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

import Colors from '../../common/Colors';
import {
  addAdditionalUserInfoToDB,
  addUserToDB,
} from '../../queries/loginQueries';
import {AuthenticationContext} from '../../services/AuthContext';

const UserOnboardingDetails = () => {
  const {setIsUserOnboarded, user} = useContext(AuthenticationContext);

  const [userOnboardingDetails, setUserOnboardingDetails] = useState({
    Question1: '',
    Question2: '',
    Question3: '',
    Question4: '',
  });
  const {Question1, Question2, Question3, Question4} = userOnboardingDetails;

  const [selected, setSelected] = useState({
    selected1: false,
    selected2: false,
    selected3: false,
    selected4: false,
  });
  const {selected1, selected2, selected3, selected4} = selected;

  const userOnboardingDetailsHandler = (fieldValue, value) => {
    setUserOnboardingDetails({
      ...userOnboardingDetails,
      [fieldValue]: value,
    });
  };

  const handleSubmit = () => {
    if (user) {
      //
      const userInfo = {
        email: user?.email,
        emailVerified: user?.emailVerified,
        displayName: user?.displayName,
        uid: user?.uid,
        isAnonymous: user?.isAnonymous,
        displayName: user?.displayName,
        phoneNumber: user?.phoneNumber,
        photoURL: user?.photoURL,
        metadata: user?.metadata,
      };
      //
      addUserToDB(userInfo, user?.uid)
        .then(() => {
          console.log('userInfo added');
          addAdditionalUserInfoToDB(userOnboardingDetails, user?.uid).then(
            () => {
              console.log('userOnboardingDetails added');
              setIsUserOnboarded(true);
            },
          );
        })
        .catch(error => console.error('Error:-', error));
    } else Alert('User not available yet');
  };

  return (
    <View style={styles.userOnboardingDetails}>
      <TextInput
        label="Question1"
        placeholder="Select"
        placeholderTextColor={Colors.Black}
        mode="outlined"
        outlineColor={Colors.Egyption_Blue}
        activeOutlineColor={Colors.Purple}
        //
        value={Question1}
        // onChangeText={text => setText(text)}
        onChangeText={value => userOnboardingDetailsHandler('Question1', value)}
      />
      {!selected1 && (
        <View style={styles.dropdownStyle}>
          <Text>Some dropdown value here</Text>
        </View>
      )}

      <TextInput
        label="Question2"
        placeholder="Select"
        placeholderTextColor={Colors.Black}
        mode="outlined"
        outlineColor={Colors.Egyption_Blue}
        activeOutlineColor={Colors.Purple}
        //
        value={Question2}
        // onChangeText={text => setText(text)}
        onChangeText={value => userOnboardingDetailsHandler('Question2', value)}
      />

      <TextInput
        label="Question3"
        placeholder="Select"
        placeholderTextColor={Colors.Black}
        mode="outlined"
        outlineColor={Colors.Egyption_Blue}
        activeOutlineColor={Colors.Purple}
        //
        value={Question3}
        // onChangeText={text => setText(text)}
        onChangeText={value => userOnboardingDetailsHandler('Question3', value)}
      />

      <TextInput
        label="Question4"
        placeholder="Select"
        placeholderTextColor={Colors.Black}
        mode="outlined"
        outlineColor={Colors.Egyption_Blue}
        activeOutlineColor={Colors.Purple}
        //
        value={Question4}
        // onChangeText={text => setText(text)}
        onChangeText={value => userOnboardingDetailsHandler('Question4', value)}
      />

      <Button icon="camera" mode="contained" onPress={handleSubmit}>
        Submit
      </Button>
    </View>
  );
};

export default UserOnboardingDetails;

const styles = StyleSheet.create({
  userOnboardingDetails: {
    flex: 1,
    backgroundColor: Colors.Gray98,
    padding: 10,
  },
  dropdownStyle: {
    borderWidth: 1,
    borderColor: Colors.Egyption_Blue,
  },
});
