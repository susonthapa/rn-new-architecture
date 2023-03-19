/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  SafeAreaView, StatusBar, Text, useColorScheme
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import RTNCalculator from 'rtn-calculator/js/NativeCalculator'
import RTNCenteredText from 'rtn-centered-text/js/RTNCenteredTextNativeComponent'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [result, setResult] = useState<number | null>(null)

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <RTNCenteredText
        text={`3 + 7 = ${result ?? '??'}`}
        style={{
          marginTop: 20,
          width: '100%',
          height: 30,
        }} />
      <Button title='Compute' onPress={async () => {
        const value = await RTNCalculator?.add(3, 7)
        console.log(`TODO: ${value}`);

        setResult(value ?? null)
      }} />
    </SafeAreaView>
  );
}


export default App;
