import {MD3LightTheme as DefaultTheme} from 'react-native-paper';
import Colors from '../common/Colors';

export const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.Egyption_Blue,
    secondary: Colors.Purple,
  },
};
