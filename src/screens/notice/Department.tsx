import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import NoticeCard from '../../components/NoticeCard';
import {useNoticeContext} from '../../contexts/Notice';

const Department = () => {
  const {departmentNotices} = useNoticeContext();

  return (
    <View style={styles.container}>
      <FlatList
        data={departmentNotices}
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
});

export default Department;
