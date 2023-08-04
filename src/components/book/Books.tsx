import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import BookCard from './BookCard';
import {Book, useBookContext} from '../../contexts/Book';

const Books = ({semesterId}: {semesterId: number}) => {
  const [books, setBooks] = useState<Book[]>([]);
  const {getBooksBySemester} = useBookContext();

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await getBooksBySemester(semesterId);
      setBooks(res);
    };

    fetchBooks();
  }, [semesterId, getBooksBySemester]);

  return (
    <FlatList
      data={books}
      renderItem={({item}) => <BookCard book={item} />}
      keyExtractor={item => item.title}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{gap: 10}}
    />
  );
};

export default Books;
