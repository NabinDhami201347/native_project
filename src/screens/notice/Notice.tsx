import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {formatDate} from '../../utils/date';
import {imageuri} from '../../api';

const Notice = ({route}: any) => {
  const {title, description, tag, createdAt, image} = route.params;
  const opacity = new Date(createdAt) < new Date() ? 0.5 : 1;

  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: '#FFFFFF'}]}>{title}</Text>
      {image && (
        <View style={styles.imageContainer}>
          <Image
            source={{uri: `${imageuri}/${image}`}}
            resizeMode="stretch"
            style={styles.image}
          />
        </View>
      )}
      <Text style={[styles.date, {opacity, color: '#FFFFFF'}]}>
        {formatDate(createdAt)}
      </Text>
      <View style={styles.tagContainer}>
        <Text style={[styles.tag, {color: '#FFFFFF'}]}>{tag}</Text>
      </View>
      <Text style={[styles.description, {color: '#FFFFFF'}]}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    width: 390,
    height: 390,
    aspectRatio: 16 / 9,
  },
  date: {
    marginBottom: 10,
  },
  tagContainer: {
    backgroundColor: '#444444',
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  tag: {
    fontSize: 16,
  },
  description: {
    fontSize: 18,
  },
});

export default Notice;
