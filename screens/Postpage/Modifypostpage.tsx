import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export function Modifypostpage() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>10.12.14 BUREAU</Text>
        <TouchableOpacity style={styles.editButton}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/edit--v1.png' }}
            style={styles.editIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.photosContainer}>
        <TouchableOpacity style={styles.addPhotoButton}>
          <Text style={styles.addPhotoText}>+ Ajoutez des photos</Text>
        </TouchableOpacity>
        {[...Array(4)].map((_, index) => (
          <Image
            key={index}
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.photo}
          />
        ))}
      </View>
      <View style={styles.tagsContainer}>
        <TouchableOpacity style={styles.addTagButton}>
          <Text style={styles.addTagText}>+ Ajouter des tags</Text>
        </TouchableOpacity>
        {[...Array(8)].map((_, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>tags</Text>
            <TouchableOpacity>
              <Text style={styles.tagRemove}>x</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TextInput
        style={styles.descriptionInput}
        placeholder="Description de l'annonce"
        multiline
      />
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>Localisation de l'annonce</Text>
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>95 Avenue parmentier</Text>
        </View>
        <Text style={styles.visibilityText}>L'adresse exacte ne sera pas visible</Text>
      </View>
      <TextInput
        style={styles.durationInput}
        placeholder="Durée de l'annonce"
      />
      <View style={styles.buttonContainer}>
        <Button title="Aperçu" onPress={() => {}} />
        <Button title="Confirmer" onPress={() => {}} />
        <Button title="Supprimer l'annonce" color="red" onPress={() => {}} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  editButton: {
    padding: 5,
  },
  editIcon: {
    width: 20,
    height: 20,
  },
  photosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  addPhotoButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    backgroundColor: '#e0e0e0',
    marginRight: 10,
    marginBottom: 10,
  },
  addPhotoText: {
    color: '#00796b',
  },
  photo: {
    width: 80,
    height: 80,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  addTagButton: {
    backgroundColor: '#e0f7fa',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  addTagText: {
    color: '#00796b',
  },
  tag: {
    flexDirection: 'row',
    backgroundColor: '#e0f0e0',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  tagText: {
    color: '#000',
  },
  tagRemove: {
    marginLeft: 5,
    color: 'red',
  },
  descriptionInput: {
    height: 80,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  locationContainer: {
    marginBottom: 10,
  },
  locationText: {
    fontSize: 16,
    marginBottom: 5,
  },
  addressContainer: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
  },
  addressText: {
    color: '#424242',
  },
  visibilityText: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  durationInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default Modifypostpage;
