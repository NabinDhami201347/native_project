import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface Comment {
  id: number;
  text: string;
  author: string;
}

interface CommentItemProps {
  comment: Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({comment}) => {
  return (
    <View style={styles.commentContainer}>
      <View style={styles.userContainer}>
        <Image
          source={{uri: 'https://avatars.githubusercontent.com/u/95552086?v=4'}}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.username}>@{comment.author}</Text>
          <Text style={styles.date}>24th July 2023</Text>
        </View>
      </View>
      <Text style={styles.commentText}>{comment.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    backgroundColor: '#212121',
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    padding: 8,
    borderRadius: 8,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
    marginTop: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'white',
  },
  username: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
    color: 'white',
  },
  date: {
    fontSize: 12,
    color: '#888888',
  },
  commentText: {
    marginLeft: 35,
    fontSize: 14,
    color: 'white',
  },
  actionsContainer: {
    marginLeft: 35,
    flexDirection: 'row',
    marginTop: 8,
  },
  actionButton: {
    marginRight: 16,
  },
  actionText: {
    color: 'blue',
    fontSize: 12,
  },
});

export default CommentItem;
