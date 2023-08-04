import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import CommentSection from '../../components/community/CommentSection';
import PostCard from '../../components/community/PostCard';

const CommunityPost = ({route}: any) => {
  const {title, description, author, date, image} = route.params;

  return (
    <ScrollView style={styles.container}>
      <PostCard
        title={title}
        description={description}
        date={date}
        author={author}
        image={image}
      />
      <CommentSection />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#090c13',
    flex: 1,
  },
});

export default CommunityPost;
