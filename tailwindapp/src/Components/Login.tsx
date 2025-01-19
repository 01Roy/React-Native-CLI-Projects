import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';

const Login = () => {
  const [crendetials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    const data = await fetch(
      'https://cl-api.djsautomate.com/w-api/service/login',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          user_email: crendetials.email,
          user_password: crendetials.password,
        }),
      },
    );

    const response = await data.json();
    Alert.alert('Login', response.message);
  };
  return (
    <View
      style={tw`w-90 mt-2 mx-auto bg-black p-4 android:pt-2 bg-white dark:bg-black rounded-lg bg-[#2a2c2d] border-[.2] border-white`}>
      <View style={tw`w-80 mx-auto mt-2`}>
        <Text style={tw`text-white text-[1.2rem] text-center tracking-[.5rem]`}>
          WELCOME
        </Text>
        <TextInput
          style={tw`w-full h-10 bg-[#2a2c2d] border-[.2] border-white mt-2 rounded-lg p-2 text-white focus:border-blue-500`}
          placeholder="Email"
          value={crendetials.email}
          onChangeText={value => setCredentials({...crendetials, email: value})}
        />
        <TextInput
          style={tw`w-full h-10 bg-[#2a2c2d] border-[.2] border-white mt-2 rounded-lg p-2`}
          placeholder="Password"
          secureTextEntry={true}
          value={crendetials.password}
          onChangeText={value =>
            setCredentials({...crendetials, password: value})
          }
        />
        <TouchableOpacity
          onPress={() => handleLogin()}
          style={tw`bg-[#2a2c2d] mt-2 h-10 rounded-lg items-center justify-center`}>
          <Text
            style={tw`text-white border-[.2] border-white py-2 px-6 rounded-md`}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Login;
