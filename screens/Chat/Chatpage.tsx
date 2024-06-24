import React from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export function Chatpage() {
  const navigation = useNavigation();

  const messages = [
    { user: 'test', message: 'test' },

  ];

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Recherchez"
      />
      <ScrollView>
        {messages.map((message, index) => (
          <TouchableOpacity key={index} style={styles.messageContainer}>
            <Text style={styles.user}>{message.user}</Text>
            <Text style={styles.message}>{message.message}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
    paddingHorizontal: 15,
  },
  messageContainer: {
    padding: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  user: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    color: '#666',
    marginTop: 5,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopColor: '#eee',
    borderTopWidth: 1,
  },
});

export default Chatpage;
