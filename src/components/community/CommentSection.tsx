import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CommentItem from './CommentItem';

interface Comment {
  id: number;
  text: string;
  author: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      text: 'This is the sciketest comment i have ever seen in the comment section.',
      author: 'John Doe',
    },
    {
      id: 2,
      text: 'Thanks for sharing!',
      author: 'Jane Smith',
    },
  ]);
  const [commentText, setCommentText] = useState('');

  const handleAddComment = () => {
    if (commentText.trim() !== '') {
      const newComment: Comment = {
        id: comments.length + 1,
        text: commentText,
        author: 'John Doe', // Set the author's name or fetch from user authentication
      };

      setComments(prevComments => [...prevComments, newComment]);
      setCommentText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Comments</Text>
      {comments.length > 0 ? (
        comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} />
        ))
      ) : (
        <Text style={styles.noCommentsText}>No comments yet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#090c13',
    borderRadius: 8,
    marginBottom: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  commentContainer: {
    marginBottom: 8,
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
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },
  date: {
    fontSize: 12,
    color: '#888888',
  },
  commentText: {
    marginLeft: 35,
    fontSize: 14,
  },
  noCommentsText: {
    fontStyle: 'italic',
    color: '#888888',
  },
});

export default CommentSection;
