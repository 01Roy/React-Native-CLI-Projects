import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import tw from 'twrnc';

type Props = PropsWithChildren<{
  children: React.ReactNode;
}>;

const Backgroud: React.FC<Props> = ({children}) => {
  return <View style={tw`bg-[#2a2c2d]`}>{children}</View>;
};

const styles = StyleSheet.create({});

export default Backgroud;
