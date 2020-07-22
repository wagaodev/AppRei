import React from 'react';
import { AppLoading } from 'expo';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';

import Index from './src/Index';

export default function App(){

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium
  });

  if(!fontsLoaded) {
    return <AppLoading />
  };

  return(
      <Index />
  )
}