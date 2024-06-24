import React from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export function Chatpage() {
  const navigation = useNavigation();

  const messages = [
    { user: '10.12.14 BUREAU', message: 'Kalash : sauvage' },
    { user: 'Tom', message: 'Vous : wsh ça sort ????' },
    { user: 'Djolanoouille', message: 'Vous : A quelle heure au duplex du coup ?' },
    { user: 'Naps', message: "Naps : C'est la kiffance !" },
    { user: "Vue.js c'est so 2022", message: "Aurélien : Qui y arrive pour l'auth ?" },
    { user: 'Newwave', message: "BenzJ : J'adore R2D2 sur la nouvelle prod NewJazz" },
    { user: 'George Floyd', message: 'Vous : pk tu rep plus ?' },
    { user: 'PouletAnanas', message: "landry : façon les blancs vous savez pas mettre d'épices" },
    { user: 'Dézingueur2Folles93', message: 'AD : On se revoit le prochain 20 Avril ?' },
    { user: 'PSG on top', message: 'Stanislas a quitté le groupe.' },
  ];

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Recherchez"
      />
      <ScrollView>
        {messages.map((message, index) => (
          <TouchableOpacity key={index} style={styles.messageContainer} onPress={() => navigation.navigate('Chat')}>
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
});

export default Chatpage;
