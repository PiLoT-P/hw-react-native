import {FlatList, Keyboard, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import bgImage from '../../images/PhotoBG-min.png';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {

  const [image, setImage] = useState(null);

  const [dataList, setdataList] = useState([
    { image: bgImage, name: 'Ліс', location: "Ivano-Frankivs'k Region, Ukraine", coments: 0, likes: 0 },
    { image: bgImage, name: 'Ліс', location: "Ivano-Frankivs'k Region, Ukraine", coments: 0, likes: 0 },
    { image: bgImage, name: 'Ліс', location: "Ivano-Frankivs'k Region, Ukraine", coments: 0, likes: 0 },
    { image: bgImage, name: 'Ліс', location: "Ivano-Frankivs'k Region, Ukraine", coments: 0, likes: 0 },
    { image: bgImage, name: 'Ліс', location: "Ivano-Frankivs'k Region, Ukraine", coments: 0, likes: 0 },
  ]);

  const pickImage = async () => {
        
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
    setImage(result.assets[0].uri);
    }
  };

  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.blockAvatar}>
          {image && <Image source={{ uri: image }} style={styles.avatar} />}
          {image ? <Icon style={styles.addIcon} name="closecircle" size={25} color={'#BDBDBD'} onPress={() => setImage(null)} /> :
            <Icon style={styles.addIcon} name="pluscircleo" size={25} color={'#FF6C00'} onPress={pickImage} />}
        </View>
        <Ionicons
          onPress={() => alert("LogOut")}
          name={'md-log-out-outline'} size={24} color={'grey'}
          style={styles.logOutBotton}
        />
        <Text style={styles.nameText}>Natali Romanova</Text>
        <View style={styles.containerPosts}>
          <FlatList 
            data={dataList}
            renderItem={({ item }) => (
              <View style={styles.postsList}>
                <Image source={item.image} style={styles.postPhoto} />
                <Text style={styles.postTitle}>{item.name}</Text>
                <View style={styles.comentTextContainer}>
                  <Ionicons name={'md-chatbubble-outline'} size={24} color={'#BDBDBD'}/>
                  <Text style={styles.coments}>{item.coments} </Text>
                  <Ionicons style={styles.iconLocation} name={'thumbs-up-outline'} size={24} color={'#BDBDBD'} />
                  <Text style={styles.coments}>{item.likes}</Text>
                  <Ionicons style={styles.iconLocation} name={'location-outline'} size={24} color={'#BDBDBD'}/>
                  <Text style={styles.location}>{item.location}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 147,
    // paddingBottom:
  },
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 46,
    alignItems: 'center',
  },
  blockAvatar: {
    height: 120,
    width: 120,
    borderRadius: 16,
    top: -60,
    position: 'absolute',
    backgroundColor: '#F6F6F6',
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 16,
  },
  addIcon: {
    position: 'absolute',
    left: 107,
    top: 81,
  },
  logOutBotton: {
    position: 'absolute',
    top: 22,
    right: 16,
  },
  nameText: {
    color: '#212121',
    fontSize: 30,
    fontFamily: 'Roboto-Medium',
    fontWeight: 500
  },
  containerPosts: {
    width: '100%',
    paddingTop: 33,
    paddingBottom: 12,
  },
  postsList: {
    marginBottom: 34,
  },
  postPhoto: {
    height: 240,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#E8E8E8',
    marginBottom: 8,
  },
  postTitle: {
    color: '#212121',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    fontWeight: 500,
  },
  comentTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  coments: {
    marginLeft: 6,
    color: '#BDBDBD',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: 400,
  },
  iconLocation: {
    marginLeft: 'auto'
  },
  location: {
    color: '#212121',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: 400,
    textDecorationLine: 'underline'
  }
});


export default Profile;