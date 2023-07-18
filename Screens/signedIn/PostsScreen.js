import {Image, StyleSheet, Text, View, FlatList } from 'react-native';
import ImageAvatar from '../../images/NFT-Avatar.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import bgImage from '../../images/Rectangle23.png';

const Posts = () => {

  const [dataList, setdataList] = useState([
    { image: bgImage, name: 'Ліс', location: "Ivano-Frankivs'k Region, Ukraine", coments: 0 },
    { image: bgImage, name: 'Ліс', location: "Ivano-Frankivs'k Region, Ukraine", coments: 0 },
    { image: bgImage, name: 'Ліс', location: "Ivano-Frankivs'k Region, Ukraine", coments: 0 },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={ImageAvatar} style={styles.avatar} />
        <View style={styles.textAvatarContainer}>
          <Text style={styles.avatarName}>Natali Romanova</Text>
          <Text style={styles.avatarEmail}>email@example.com</Text>
        </View>
      </View>
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
                  <Ionicons style={styles.iconLocation} name={'location-outline'} size={24} color={'#BDBDBD'}/>
                  <Text style={styles.location}>{item.location}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: '#FFFFFF'
  },
  avatarContainer: {
    flexDirection: 'row'
    
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  textAvatarContainer: {
    marginLeft: 8,
    justifyContent: 'center'
  },
  avatarName: {
    color: '#212121',
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    fontWeight: 500,
  },
  avatarEmail: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    fontWeight: 400,
  },
  containerPosts: {
    paddingTop: 32,
    marginBottom: 32,
  },
  postsList: {
    marginBottom: 34,
  },
  postPhoto: {
    height: 240,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#E8E8E8',
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

export default Posts;