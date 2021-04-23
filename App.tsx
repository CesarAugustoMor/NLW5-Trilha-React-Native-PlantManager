import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import React from 'react';
import {
  useFonts,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

import Routes from './src/routes';

export default function App() {
  const [fontsIsLoad] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
  });

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
