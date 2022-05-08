import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { View, LogBox } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import Widget from './src/components/Widget';
import { theme } from './src/theme';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <View style={{
        flex: 1,
        backgroundColor: theme.colors.background,
    }}>
      <StatusBar
        style="light"
        backgroundColor='transparent'
        translucent
      />
      
      <Widget />
    </View>
  );
}