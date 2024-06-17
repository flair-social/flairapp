import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Postpage1() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.groupContainer}>
        <View style={styles.GroupnameCross}>
          <Text style={styles.groupTitle}>2.7.0 Toujours plus haut</Text>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.crossButton}>
            <Image
              source={{ uri: 'https://img.icons8.com/ios-glyphs/30/multiply.png' }}
              style={styles.cross}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={styles.groupImage}
        />
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={{uri: 'https://img.icons8.com/pastel-glyph/64/add-male-user.png'}} style={styles.actionimage}/>
            <Text style={styles.actionText}>Ajouter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={{uri: 'https://img.icons8.com/material-outlined/24/hourglass--v1.png'}} style={styles.actionimage}/>
            <Text style={styles.actionText}>File d'attente</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={{uri: 'https://img.icons8.com/ios-glyphs/30/exit.png'}} style={styles.actionimage}/>
            <Text style={styles.actionText}>Quitter le groupe</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.membersContainer}>
          <Text style={styles.membersTitle}>Membres</Text>
          <Text style={styles.membersText}>@kalash, @rigolekom1jnoun93 et 6 autres</Text>
        </View>
        <View style={styles.datesContainer}>
          <Text style={styles.datesTitle}>Dates</Text>
          <Text style={styles.datesText}>Du 07/06/24 au 10/06/24</Text>
        </View>
        <TouchableOpacity style={styles.Subtitlecontainer}>
            <Text style={styles.groupSubtitle}>Modifier l'annonce</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  crossButton: {

  },
  cross: {
    width: 25,
    height: 25,
    marginLeft: 40,
  },
  GroupnameCross: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    flex: 1,
  },
  groupContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  groupImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  groupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 65,
  },
  groupSubtitle: {
    color: '#000',
  },
  Subtitlecontainer: {
    backgroundColor: '#FF0000',
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius : 5,
    margin : 40,
    justifyContent : 'center',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor : '#0033',
    borderRadius : 5,
    margin : 10,
    justifyContent : 'center'
  },
  actionText: {
    color: '#000',
    alignItems : 'center',
    fontWeight : 'bold',
    textAlign: 'center',
  },
  actionimage : {
    height : 23,
    width : 23,
  },
  membersContainer: {
    alignItems: 'center',
  },
  membersTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  membersText: {
    color: '#424242',
  },
  datesContainer: {
    alignItems: 'center',
  },
  datesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  datesText: {
    color: '#424242',
  },
});

export default Postpage1;
