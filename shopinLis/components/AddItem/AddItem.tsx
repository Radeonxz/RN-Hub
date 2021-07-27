import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {AddItemProps} from './AddItem.model';

const AddItem = ({addItem}: AddItemProps) => {
  const [text, setText] = useState<string>('');

  const onChange = (textValue: string) => setText(textValue);

  const onPress = () => {
    addItem(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={'Add item...'}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 5,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
