import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';

import Post from '../../components/community/Post';
import {protectedInstance} from '../../api';
import {COLORS} from '../../constants/colors';

interface IPost {
  id: number;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  studentId: number;
  student: {
    name: string;
    profile?: {
      photo?: string;
    };
  };
}

const Community = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await protectedInstance.get('/posts');
      setPosts(response.data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts}
        renderItem={({item}) => (
          <Post
            title={item.title}
            description={item.description}
            author={item.student.name}
            date={item.createdAt}
            image={item.image}
            profileImage={item.student?.profile?.photo}
          />
        )}
        contentContainerStyle={styles.postList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 40,
    backgroundColor: COLORS.BACKGROUND_DARK,
  },
  postList: {
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Community;
