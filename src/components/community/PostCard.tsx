import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {imageuri} from '../../api';
import {formatDate} from '../../utils/date';

interface PostCardProps {
  title: string;
  description: string;
  author: string;
  date: string;
  image?: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  author,
  date,
  image,
}) => {
  return (
    <View style={styles.container}>
      {image && (
        <Image source={{uri: `${imageuri}/${image}`}} style={styles.image} />
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.authorDate}>
          {author} - {formatDate(date)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#090c13',
    paddingTop: 20,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    color: 'white',
  },
  description: {
    color: 'white',
    fontSize: 14,
    marginBottom: 8,
  },
  authorDate: {
    fontSize: 12,
    color: '#888888',
  },
});

export default PostCard;
