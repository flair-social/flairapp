import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export function ProfileOverviewScreen() {
    const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImageWrapper}>
          <View style={styles.profileImage}>
            <Image
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
              style={styles.image}
            />
          </View>
        </View>
        <View style={styles.namemodify}>
            <Text style={styles.username}>@maximesjohner</Text>
            <Image
                source={{uri : 'https://img.icons8.com/ios-filled/50/edit--v1.png'}}
                style={styles.imagemodify}
            />
        </View>
        <View style={styles.tagsContainer}>
          <View style={styles.tag}><Text style={styles.tagText}>Voiture</Text></View>
          <View style={styles.tag}><Text style={styles.tagText}>Bowling</Text></View>
          <View style={styles.tag}><Text style={styles.tagText}>Bars</Text></View>
          <View style={styles.tag}><Text style={styles.tagText}>Shopping</Text></View>
          <View style={styles.tag}><Text style={styles.tagText}>Jeux vidéos</Text></View>
        </View>
        <View style={styles.bioContainer}>
          <Text style={styles.sectionTitle}>Biographie</Text>
          <Text style={styles.bioText}>Coucou j'aime bien sortir</Text>
        </View>
        <View style={styles.groupsContainer}>
          <Text style={styles.sectionTitle}>Groupes</Text>
          <Text style={styles.groupsText}>les g, les homies, F.R.I.E.N.D</Text>
        </View>
        <View style={styles.badgesContainer}>
          <Text style={styles.sectionTitle}>Badges</Text>
        </View>
        <View style={styles.postsContainer}>
          <Text style={styles.sectionTitle}>Posts</Text>
              <TouchableOpacity style={styles.post} onPress={()=> navigation.navigate('./PostPage/Postpage1.tsx')}>
                <Image
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                    style={styles.postimage}
                    />
                    <Text style={styles.postname}>2.7.0 Toujours plus haut</Text>
              </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postimage: {
    width : 250,
    height : 100,
    borderRadius: 15,
  },
  postname: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  post: {
    padding: 20,
    flex: 1,
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  namemodify:{
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imagemodify: {
    width : 15,
    height: 15,
    justifyContent:'flex-end',
    padding: 5,
    margin:5,
  },
  profileImageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tag: {
    backgroundColor: '#e0f7fa',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  tagText: {
    color: '#00796b',
  },
  bioContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bioText: {
    color: '#424242',
  },
  groupsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  groupsText: {
    color: '#424242',
  },
  badgesContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  postsContainer: {
    alignItems: 'center',
  },
});
