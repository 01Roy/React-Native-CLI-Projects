/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import tw from 'twrnc';
import Header from './src/Components/Header';
import Login from './src/Components/Login';
import Main from './src/Screen/Main';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={tw`bg-[#2a2c2d]`}>
      <ScrollView>
        <Header />
        <Login />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
