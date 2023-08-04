import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import {Paragraph, SmallHeading} from '../CustomHeading';
import {Book} from '../../contexts/Book';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({book}) => {
  const navigation = useNavigation();

  const handleBookSelection = () => {
    // @ts-ignore
    // navigation.navigate('Book', book);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleBookSelection}>
      <Image source={{uri: book.image}} style={styles.image} />
      <SmallHeading>{book.title}</SmallHeading>
      <Paragraph>{book.author}</Paragraph>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  image: {
    width: 120,
    height: 150,
    marginBottom: 8,
    borderRadius: 6,
  },
});

export default BookCard;
