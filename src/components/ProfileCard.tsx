import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

import mime from 'mime';
import {useAuthContext} from '../contexts/Auth';
import {imageuri, protectedInstance} from '../api';

const ProfileCard = () => {
  const [selectedImage, setSelectedImage] =
    useState<ImagePickerResponse | null>(null);
  const {user, updateUser} = useAuthContext();

  console.log(user, 'user');

  const pickImage = () => {
    launchImageLibrary(
      {mediaType: 'photo', includeBase64: false, maxHeight: 120, maxWidth: 120},
      (response: ImagePickerResponse) => {
        if (
          !response.didCancel &&
          !response.errorCode &&
          response.assets &&
          response.assets[0]?.uri
        ) {
          setSelectedImage(response);
        }
      },
    );
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      return;
    }

    if (!selectedImage.assets || selectedImage.assets.length === 0) {
      return; // Handle the case when assets are empty or undefined
    }

    const asset = selectedImage.assets[0];

    if (!asset.uri) {
      return;
    }

    const mimeType = mime.getType(asset.uri);
    const formData = new FormData();

    formData.append('file', {
      uri: asset.uri,
      type: mimeType,
      name: asset.fileName || 'image.jpg',
    });

    try {
      const response = await protectedInstance.post('/auth/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response && response.data && response.data.user) {
        updateUser(response.data.user);
      } else {
        console.log('Error in API response:', response.data);
      }
    } catch (error) {
      console.log('Upload failed:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.basicBasicInformationContainer}>
          <Image
            source={
              selectedImage && selectedImage.assets && selectedImage.assets[0]
                ? {uri: selectedImage.assets[0].uri} // Check if selected image exists
                : user?.profile?.photo
                ? {uri: `${imageuri}${user?.profile?.photo}`} // If no selected image, check if user has a profile photo
                : {uri: 'https://avatars.githubusercontent.com/u/95552086?v=4'} // If no user and selected image, use default avatar
            }
            style={styles.image}
            resizeMode="cover"
          />

          <TouchableOpacity style={styles.editButton} onPress={pickImage}>
            <Icon name="edit" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {selectedImage ? (
        <Button title="Save" onPress={uploadImage} />
      ) : (
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{user?.name}</Text>
        </View>
      )}
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  basicBasicInformationContainer: {
    position: 'relative',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editButton: {
    position: 'absolute',
    bottom: 8,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 20,
    padding: 5,
  },
  infoContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
});
