/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import FlatCard from './Components/FlatCard';
import ElevatedCard from './Components/ElevatedCard';
import FancyCard from './Components/FancyCard';
import ActionCard from './Components/ActionCard';
import ContactList from './Components/ContactList';

function App (){
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.mainContainer}>New Project</Text>
        <FlatCard/>
        <ElevatedCard/>
        <FancyCard/>
        <ActionCard/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    color:"white",
    padding:8
  }
})






export default App;
