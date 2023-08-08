import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';

import Post from '../../components/community/Post';
import {protectedInstance} from '../../api';

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
    profile: {
      photo: string;
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
            profileImage={item.student.profile.photo}
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
    paddingVertical: 20,
    backgroundColor: '#090c13',
  },
  postList: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Community;
