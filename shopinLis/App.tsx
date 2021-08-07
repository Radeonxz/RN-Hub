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
import {View, StyleSheet, FlatList, Alert} from 'react-native';

import Header from './components/Header';
import {ListItem, IItem} from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const initArray: Array<IItem> = [
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

  const [items, setItems] = useState<Array<IItem>>(initArray);
  const [editStatus, editStatusChange] = useState<boolean>(false);
  const [editItemDetail, editItemDetailChange] = useState<IItem>({
    id: null,
    text: null,
  });
  const [checkedItems, checkedItemChange] = useState<Array<IItem> | []>([]);

  const addItem = (text: string) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [
        {text: 'Ok', style: 'cancel'},
      ]);
    } else {
      setItems(prevItems => {
        return [{id: Math.random(), text}, ...prevItems];
      });
    }
  };

  const deleteItem = (id: number) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const handleEditChange = (text: string) => {
    editItemDetailChange({id: editItemDetail.id, text});
  };

  const saveEditItem = (id: number) => {
    setItems(prevItems => {
      return prevItems.map(item =>
        item.id === editItemDetail.id ? {id, text: editItemDetail.text} : item,
      );
    });
    // Flip edit status back to false
    editStatusChange(!editStatus);
  };

  const editItem = (id: number, text: string) => {
    editItemDetailChange({
      id,
      text,
    });
    return editStatusChange(!editStatus);
  };

  const itemChecked = (id: number, text: string) => {
    const isChecked = checkedItems.filter(checkedItem => checkedItem.id === id);
    isChecked.length
      ? // remove item from checked items state (uncheck)
        checkedItemChange(prevItems => {
          return [...prevItems.filter(item => item.id !== id)];
        })
      : // Add item to checked items state
        checkedItemChange(prevItems => {
          return [...prevItems.filter(item => item.id !== id), {id, text}];
        });
  };

  return (
    <View style={styles.container}>
      <Header title="ShopinLis" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem
            item={item}
            isEditing={editStatus}
            editItemDetail={editItemDetail}
            checkedItems={checkedItems}
            deleteItem={deleteItem}
            editItem={editItem}
            saveEditItem={saveEditItem}
            handleEditChange={handleEditChange}
            itemChecked={itemChecked}
          />
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
