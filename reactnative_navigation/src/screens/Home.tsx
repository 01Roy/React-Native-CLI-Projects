import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';

// React navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

import ProductItems from '../components/ProductItems';
import Seperator from '../components/Seperator';

// Data
import {PRODUCTS_LIST} from '../data/content';

type Homeprops = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Homeprops) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Seperator}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details', {
                product: item,
              });
            }}>
            <ProductItems product={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});

export default Home;
