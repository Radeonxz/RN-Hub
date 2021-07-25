/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const initArray = [
    {
      id: Math.random(),
      text: 'Milk',
    },
    {
      id: Math.random(),
      text: 'Eggs',
    },
    {
      id: Math.random(),
      text: 'Bread',
    },
    {
      id: Math.random(),
      text: 'Juice',
    },
  ];

  const [items, setItems] = useState(initArray);

  const deleteItem = (id: number) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Header title="ShopinLis" />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
