import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
  const [liked, setLiked] = useState(false);

  const handleLikePress = () => {
    setLiked(!liked);
  };

  const handleCommentPress = () => {};

  const handleSharePress = () => {};

  return (
    <View style={styles.container}>
      {image && <Image source={{uri: image}} style={styles.image} />}
      <View style={styles.postCardHeader}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.authorDate}>
          {author} - {date}
        </Text>
      </View>
      <View style={styles.reactionsContainer}>
        <TouchableOpacity
          onPress={handleLikePress}
          style={styles.reactionButton}>
          <Ionicons
            name={liked ? 'thumbs-up' : 'thumbs-up-outline'}
            size={20}
            color={liked ? 'blue' : 'gray'}
          />
          <Text style={styles.reactionText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleCommentPress}
          style={styles.reactionButton}>
          <Ionicons name="chatbubble-outline" size={20} color="blue" />
          <Text style={styles.reactionText}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSharePress}
          style={styles.reactionButton}>
          <Ionicons name="share-social-outline" size={20} color="blue" />
          <Text style={styles.reactionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 12,
  },
  postCardHeader: {
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
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

export default PostCard;
