import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {protectedInstance} from '../../api';
import NoticeCard from '../../components/NoticeCard';

export interface INotice {
  id: number;
  title: string;
  description: string;
  tag: string;
  image?: string;
  createdAt: string;
}

const Notices = () => {
  const [loading, setLoading] = useState(true);
  const [notices, setNotices] = useState<INotice[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const fetchNotices = async () => {
    try {
      const response = await protectedInstance.get('/notices');
      setNotices(response.data);
      setLoading(false);
    } catch (error: any) {
      console.error(
        'Error fetching notices:',
        error.response?.data?.error || error.message,
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const filterNoticesByTag = useMemo(() => {
    return selectedTag === 'All'
      ? notices
      : notices.filter(notice => notice.tag === selectedTag);
  }, [notices, selectedTag]);

  const uniqueTags = useMemo(
    () => Array.from(new Set(notices.map(notice => notice.tag))),
    [notices],
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.tagsContainer}>
        <TouchableOpacity
          style={[styles.tag, selectedTag === 'All' && styles.selectedTag]}
          onPress={() => setSelectedTag('All')}>
          <Text
            style={[
              styles.tagText,
              selectedTag === 'All' && styles.selectedTagWithColor,
            ]}>
            All
          </Text>
        </TouchableOpacity>

        {uniqueTags.map(tag => (
          <TouchableOpacity
            key={tag}
            style={[styles.tag, selectedTag === tag && styles.selectedTag]}
            onPress={() => setSelectedTag(tag)}>
            <Text
              style={[
                styles.tagText,
                selectedTag === tag && styles.selectedTagWithColor,
              ]}>
              {tag}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filterNoticesByTag}
        renderItem={({item}) => (
          <NoticeCard
            id={item.id}
            title={item.title}
            image={item?.image}
            description={item.description}
            tag={item.tag}
            createdAt={item.createdAt}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#090c13',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noticeContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  tag: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  selectedTag: {
    borderColor: 'pink',
  },
  selectedTagWithColor: {
    fontWeight: '600',
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: 'gray',
  },
  tagText: {
    fontSize: 14,
    color: 'white',
  },
});

export default Notices;
