import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useBookContext} from '../../contexts/Book';

const Categories = () => {
  const {tags, selectedTag, filterBooksByTag} = useBookContext();

  const handleTagPress = (category: string) => {
    filterBooksByTag(category);
  };

  const renderTag = ({
    item: category,
    index,
  }: {
    item: string;
    index: number;
  }) => {
    const isSelected = selectedTag === category;
    const tagStyle = isSelected ? styles.tagSelected : styles.tag;

    return (
      <TouchableOpacity
        style={tagStyle}
        onPress={() => handleTagPress(category)}
        key={index}>
        <Text style={styles.tagText}>{category}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={tags}
      renderItem={renderTag}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: 20,
  },
  tag: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#333',
    marginHorizontal: 5,
  },
  tagSelected: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#05BFDB',
    marginHorizontal: 5,
  },
  tagText: {
    color: '#fff',
    textTransform: 'capitalize',
    fontSize: 16,
  },
});

export default Categories;
