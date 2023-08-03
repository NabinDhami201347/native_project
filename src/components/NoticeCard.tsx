import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {formatDate} from '../utils/date';
import {INotice} from '../screens/notice/Notices';

const NoticeCard: React.FC<INotice> = ({
  title,
  description,
  tag,
  createdAt,
  image,
}) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    // @ts-ignore
    navigation.navigate('Notice', {title, description, tag, createdAt, image});
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.tag}>{tag}</Text>
          <Text style={styles.date}>{formatDate(createdAt)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NoticeCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#2C3333',
    borderRadius: 8,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: 'white',
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tag: {
    color: 'orange',
    fontSize: 14,
  },
  date: {
    color: 'white',
    fontSize: 14,
  },
});
