import 'react-native-gesture-handler';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TabNavigator from './navigation/bottomTabNavigator';
import { useEffect, useState } from 'react';
import { fonts } from '~/config/helpers/assets';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function loadAssets() {
      try {
        await Font.loadAsync({
          WorkSans_Extrabold: fonts.extrabold,
          WorkSans_Bold: fonts.bold,
          WorkSans_Semibold: fonts.semibold,
          WorkSans_Medium: fonts.medium,
          WorkSans_Light: fonts.light,
        });
        await SplashScreen.hideAsync();
      } catch (error) {
        console.error('Error loading assets');
      } finally {
        setReady(true);
      }
    }
    loadAssets();
  }, []);

  if (!ready) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
