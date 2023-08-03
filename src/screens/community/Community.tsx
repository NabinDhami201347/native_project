import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Post from '../../components/community/Post';

const posts = [
  {
    id: '1',
    title: 'Game Development',
    description:
      'Game development is the process of creating interactive electronic games. It involves designing, developing, and programming games for various platforms such as consoles, computers, mobile devices, and more.',
    author: 'Randy Orton',
    date: 'July 17, 2023',
  },
  {
    id: '2',
    title: 'Machine Learning',
    description:
      'Machine Learning (ML) is a subset of artificial intelligence (AI) that focuses on developing algorithms and models that enable computers to learn and make predictions or decisions without being explicitly programmed.',
    author: 'John Cena',
    date: 'July 18, 2023',
  },
  {
    id: '3',
    title: 'Blockchain Development',
    description:
      'As data availability and computational power continue to increase, machine learning is expected to play an increasingly significant role in solving complex problems and driving advancements in various fields.',
    author: 'Roman Reigns',
    date: 'July 19, 2023',
  },
  {
    id: '4',
    title: 'Data Science',
    description: 'Data Science bootcamp is hapeing this saturday',
    author: 'Nabin Dhami',
    date: 'August 1, 2025',
    image:
      'https://th.bing.com/th/id/R.2b7d505bd3e7b290420bf537056685ec?rik=V7bN%2bB5lzbOUOA&pid=ImgRaw&r=0',
  },
];

const Community = () => {
  // @ts-ignore
  const renderPost = ({item}) => (
    <Post
      title={item.title}
      description={item.description}
      author={item.author}
      date={item.date}
      image={item.image}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderPost}
        contentContainerStyle={styles.postList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  postList: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});

export default Community;
