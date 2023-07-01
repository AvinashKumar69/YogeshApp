import {firebase} from '@react-native-firebase/firestore';

export const getUser = id => {
  return firebase.firestore().collection('users').doc(id).get();
};

