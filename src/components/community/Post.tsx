import React, {useState} from 'react';
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
}

const Post: React.FC<PostProps> = ({
  title,
  description,
  author,
  date,
  image,
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
        <Text style={styles.authorDate}>
          {author} - {formatDate(date)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    color: '#ffffff',
    padding: 10,
    marginBottom: 16,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 12,
  },
  postHeader: {
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
  reactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reactionText: {
    marginLeft: 4,
    color: 'blue',
  },
});

export default Post;
