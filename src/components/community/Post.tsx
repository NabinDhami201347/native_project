import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {imageuri} from '../../api';
import {formatDate} from '../../utils/date';

interface PostProps {
  title: string;
  description: string;
  author: string;
  date: string;
  image?: string;
  profileImage?: string;
}

const Post: React.FC<PostProps> = ({
  title,
  description,
  author,
  date,
  image,
  profileImage,
}) => {
  const navigation = useNavigation();

  const onPress = () => {
    // @ts-ignore
    navigation.navigate('CommunityPost', {
      title,
      description,
      author,
      date,
      image,
      profileImage,
    });
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {image && (
        <Image source={{uri: `${imageuri}/${image}`}} style={styles.image} />
      )}
      <View style={styles.postHeader}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: 10,
          }}>
          {profileImage ? (
            <Image
              source={{uri: `${imageuri}${profileImage}`}}
              style={styles.avatar}
              resizeMode="cover"
            />
          ) : (
            <Image
              source={{
                uri: `https://avatars.githubusercontent.com/u/95552086?v=4`,
              }}
              style={styles.avatar}
              resizeMode="cover"
            />
          )}
          <Text style={styles.authorDate}>{author}</Text>
          <Text style={styles.authorDate}>{formatDate(date)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    color: '#ffffff',
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  postHeader: {
    padding: 10,
    marginBottom: 12,
    color: '#ffffff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#ffffff',
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
    color: '#ffffff',
  },
  authorDate: {
    fontSize: 12,
    color: '#888888',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
});

export default Post;
