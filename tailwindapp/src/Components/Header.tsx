import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import tw from 'twrnc';

const Header: React.FC = () => {
  return (
    <View
      style={tw`w-90 mt-2 mx-auto bg-black p-4 android:pt-2 bg-white dark:bg-black rounded-lg bg-[#2a2c2d] border-[.2] border-white`}>
      <Text
        style={tw`text-[1.2rem] text-white tracking-wider dark:text-white text-center`}>
        DJS
      </Text>
      <Text
        style={tw`text-[1.2rem] text-white tracking-wider dark:text-white text-center`}>
        Automate
      </Text>
    </View>
  );
};

export default Header;
