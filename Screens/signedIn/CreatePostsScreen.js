import { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CreatePost = () => {

  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);

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

  useEffect(() => {
    if (image && name && location) {
      setSubmitDisabled(false);
    }
  },[image, name, location])

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {image && <Image style={styles.image} source={{ uri: image }} />}
        <Ionicons onPress={pickImage} style={[styles.camera, image ? styles.cameraFocus: null]} name={'camera'} size={24} color={'#BDBDBD'}/>
      </View>
      {image? <Text style={styles.textImage}>Редагувати фото</Text>: <Text style={styles.textImage}>Завантажте фото</Text>}
      <View style={styles.formContainer}>
        <TextInput
          onChangeText={(val) => setName(val)}
          value={name}
          placeholder={"Назва..."}
          placeholderStyle={{ fontFamily: 'Roboto-Regular', fontSize: 16, color: '#BDBDBD', fontWeight: 400, }}
          style={styles.inputBlock}
        ></TextInput>
        <View style={styles.locationContainer}>
          <TextInput
            onChangeText={(val) => setLocation(val)}
            value={location}
            placeholder={"Місцевість..."}
            placeholderStyle={{ fontFamily: 'Roboto-Regular', fontSize: 16, color: '#BDBDBD', fontWeight: 400, }}
            style={[styles.inputBlock, styles.inputBlockLocation]}
          ></TextInput>
          <Ionicons style={styles.iconLocation} name={'location-outline'} size={24} color={'#BDBDBD'}/>
        </View>
      </View>
      <TouchableOpacity
        aria-disabled={submitDisabled}
        style={[styles.formButton, submitDisabled? styles.formButtonDisable : null]}
      >
        <Text style={[styles.formBottomText, submitDisabled? styles.formBottomTextDisable : null]}>Опублікувати</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.trashBlock}>
        <Ionicons style={styles.iconTrash} name={'trash-outline'} size={24} color={'#BDBDBD'}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,

  },
  imageContainer: {
    backgroundColor: '#F6F6F6',
    height: 248,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    position: 'relative',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 248,
    borderRadius: 8,
  },
  camera: {
    position: 'absolute',
    top: 90,
    left: '42%',
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 50
  },
  cameraFocus: {
    backgroundColor: '#ffffff4d',
    color: '#FFFFFF',
  },
  textImage: {
    color: '#BDBDBD',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: 400,
  },
  formContainer: {
    gap: 16,
    paddingTop: 32,
    paddingBottom: 32,
  },
  formButton: {
    width: '100%',
    backgroundColor: '#FF6C00',
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
  },
  formButtonDisable: {
    backgroundColor: '#F6F6F6',

  },
  formBottomText: {
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: 400,
  },
  formBottomTextDisable: {
    color: '#BDBDBD',
  },
  inputBlock: {
    width: '100%',
    height: 50,
    borderRadius: 6,
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
    paddingTop: 16,
    paddingBottom: 15,
  },
  locationContainer: {
    position: 'relative'
  },
  iconLocation: {
    position: 'absolute',
    top: 13,
  },
  inputBlockLocation: {
    paddingLeft: 28,
  },
  trashBlock: {
    marginLeft: '40%',
    marginTop: 'auto',
    marginBottom: 32,
    height: 40,
    width: 70,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 23,
    paddingRight: 23,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
  }
});


export default CreatePost;