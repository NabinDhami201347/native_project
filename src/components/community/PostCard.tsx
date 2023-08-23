import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {imageuri} from '../../api';
import {formatDate} from '../../utils/date';

interface PostCardProps {
  title: string;
  description: string;
  author: string;
  date: string;
  image?: string;
}

const PostCard: React.FC<PostCardProps> = ({author, date, image}) => {
  return (
    <View style={styles.container}>
      {image && (
        <Image source={{uri: `${imageuri}/${image}`}} style={styles.image} />
      )}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          marginVertical: 10,
        }}>
        <Image source={{uri: `${imageuri}/${image}`}} style={styles.avatar} />
        <Text style={styles.authorDate}>{author}</Text>
        <Text style={styles.authorDate}>{formatDate(date)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#090c13',
    paddingTop: 20,
    borderRadius: 8,
    paddingHorizontal: 20,
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
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
});

export default PostCard;
