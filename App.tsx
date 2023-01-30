/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import { DatePicker } from '@src/components/DatePicker';
import { TimePicker } from '@src/components/TimePicker';
import Box from '@src/components/Box';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <GestureHandlerRootView>
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <Box alignSelf="center" margin={[16, 16]}>
          <DatePicker />
        </Box>
        <Box alignSelf="center" margin={[16, 16]}>
          <TimePicker />
        </Box>
      </ScrollView>
    </SafeAreaView>
    // </GestureHandlerRootView>
  );
}

export default App;
