import React, {useContext, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';

import {colorList, genderList} from '../../assets/data/DropdownData';
import Colors from '../../common/Colors';
import {
  addAdditionalUserInfoToDB,
  addUserToDB,
} from '../../queries/loginQueries';
import {AuthenticationContext} from '../../services/AuthContext';

const UserOnboardingDetails = () => {
  const {setIsUserOnboarded, user} = useContext(AuthenticationContext);

  const [dropdownValue1, setDropdownValue1] = useState('');
  const [dropdownValue2, setDropdownValue2] = useState('');
  const [dropdownValue3, setDropdownValue3] = useState('');
  const [dropdownValue4, setdropdownValue4] = useState('');

  const [showDropDown, setShowDropDown] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
  });
  const {dropdown1, dropdown2, dropdown3, dropdown4} = showDropDown;

  // const [userOnboardingDetails, setUserOnboardingDetails] = useState({
  //   dropdownValue1: '',
  //   dropdownValue2: '',
  //   dropdownValue3: '',
  //   dropdownValue4: '',
  // });
  // const {dropdownValue1, dropdownValue2, dropdownValue3, dropdownValue4} =
  //   userOnboardingDetails;

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
      const userOnboardingDetails = {
        dropdownValue1: dropdownValue1,
        dropdownValue2: dropdownValue2,
        dropdownValue3: dropdownValue3,
        dropdownValue4: dropdownValue4,
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
    <View style={styles.safeContainerStyle}>
      <DropDown
        label="Question 1"
        mode="outlined"
        text
        visible={dropdown1}
        showDropDown={() => setShowDropDown({...showDropDown, dropdown1: true})}
        onDismiss={() => setShowDropDown({...showDropDown, dropdown1: false})}
        value={dropdownValue1}
        // setValue={val =>
        //   setUserOnboardingDetails({
        //     ...userOnboardingDetails,
        //     ['dropdownValue1']: val,
        //   })
        // }
        setValue={setDropdownValue1}
        list={genderList}
      />

      <DropDown
        label="Question 2"
        mode="outlined"
        visible={dropdown2}
        showDropDown={() => setShowDropDown({...showDropDown, dropdown2: true})}
        onDismiss={() => setShowDropDown({...showDropDown, dropdown2: false})}
        value={dropdownValue2}
        // setValue={val =>
        //   setUserOnboardingDetails({
        //     ...userOnboardingDetails,
        //     ['dropdownValue2']: val,
        //   })
        // }
        setValue={setDropdownValue2}
        list={colorList}
      />

      <DropDown
        label="Question 3"
        mode="outlined"
        visible={dropdown3}
        showDropDown={() => setShowDropDown({...showDropDown, dropdown3: true})}
        onDismiss={() => setShowDropDown({...showDropDown, dropdown3: false})}
        value={dropdownValue3}
        // setValue={val =>
        //   setUserOnboardingDetails({
        //     ...userOnboardingDetails,
        //     ['dropdownValue3']: val,
        //   })
        // }
        setValue={setDropdownValue3}
        list={genderList}
      />

      <DropDown
        label="Question 4"
        mode="outlined"
        visible={dropdown4}
        showDropDown={() => setShowDropDown({...showDropDown, dropdown4: true})}
        onDismiss={() => setShowDropDown({...showDropDown, dropdown4: false})}
        value={dropdownValue4}
        // setValue={val =>
        //   setUserOnboardingDetails({
        //     ...userOnboardingDetails,
        //     ['dropdownValue4']: val,
        //   })
        // }
        setValue={setdropdownValue4}
        list={genderList}
      />

      <Button
        icon="content-save-move"
        mode="contained"
        buttonColor={Colors.Egyptian_Blue}
        style={styles.submitButton}
        labelStyle={styles.submitButtonLabel}
        onPress={handleSubmit}>
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
    borderColor: Colors.Egyptian_Blue,
  },
  //
  containerStyle: {
    flex: 1,
    backgroundColor: Colors.Gray98,
  },
  spacerStyle: {
    marginBottom: 15,
  },
  safeContainerStyle: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  },
  submitButton: {
    borderRadius: 5,
    marginVertical: 10,
  },
  submitButtonLabel: {
    color: Colors.White,
    fontSize: 16,
    fontWeight: '600',
  },
});
