import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { addNotificationReceivedListener } from 'expo-notifications';
import React, { useEffect } from 'react';
import {
  useFonts,
  Jost_300Light,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

import Routes from './src/routes';
import { Plant } from './src/types/Plant';

export default function App() {
  const [fontsIsLoad] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
  });

  useEffect(() => {
    const subscription = addNotificationReceivedListener(async notification => {
      const plant = notification.request.content.data.plant as Plant;
    });

    subscription.remove();
  }, []);

  if (!fontsIsLoad) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar />
      <Routes />
    </>
  );
}
