import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
} from 'react';
import {initialBooks} from '../constants';

export interface Book {
  title: string;
  description: string;
  author: string;
  image: string;
  tags: string[];
  available: number;
  totalBooks: number;
  semesterId: number;
}

interface BookContextProps {
  books: Book[];
  tags: string[];
  selectedBook: Book | null;
  selectBook: (book: Book) => void;
  selectedTag: string;
  filterBooksByTag: (tag: string) => void;
  getBooksBySemester: (semesterId: number) => Book[];
}

const BookContext = createContext<BookContextProps | null>(null);

export const BookProvider = ({children}: {children: ReactNode}) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>('All Books');
  const [selectedSemesterId, setSelectedSemesterId] = useState<number>(1); // Assuming 1 is the value for the first semester

  const selectBook = useCallback((book: Book) => {
    setSelectedBook(book);
  }, []);

  const filterBooksByTag = useCallback((tag: string) => {
    setSelectedTag(tag);
  }, []);

  const tags: string[] = initialBooks.reduce<string[]>(
    (uniqueTags, book) => {
      book.tags.forEach(tag => {
        if (!uniqueTags.includes(tag)) {
          uniqueTags.push(tag);
        }
      });
      return uniqueTags;
    },
    ['All Books'],
  );

  const getBooksBySemester = (semesterId: number): Book[] => {
    if (selectedTag === 'All Books') {
      return initialBooks.filter(book => book.semesterId === semesterId);
    } else {
      return initialBooks.filter(
        book =>
          book.semesterId === semesterId && book.tags.includes(selectedTag),
      );
    }
  };

  const filteredBooks = getBooksBySemester(selectedSemesterId);

  return (
    <BookContext.Provider
      value={{
        books: filteredBooks,
        selectBook,
        selectedBook,
        selectedTag,
        filterBooksByTag,
        tags,
        getBooksBySemester,
      }}>
      {children}
    </BookContext.Provider>
  );
};

// @ts-ignore
export const useBookContext = (): BookContextProps => useContext(BookContext); // FIX TS ERROR
