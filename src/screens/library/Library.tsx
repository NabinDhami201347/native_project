import React from 'react';
import {View, ScrollView, StyleSheet, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Books from '../../components/book/Books';
import Categories from '../../components/book/Categories';
import {LargeHeading} from '../../components/CustomHeading';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({title, children}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        gap: 10,
        marginVertical: 10,
        paddingHorizontal: 5,
      }}>
      <LargeHeading>{title}</LargeHeading>
      {children}
    </View>
  );
};

const Library = () => {
  return (
    <View style={styles.container}>
      <View style={{borderWidth: 5, borderEndColor: 'gray', marginBottom: 10}}>
        <View style={styles.searchBarContainer}>
          <Ionicons
            name="search"
            size={20}
            color="#888"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchBar}
            placeholder="Search fo favourite"
            placeholderTextColor="rgba(120,120,120,0.5)"
          />
        </View>
        <Categories />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View></View>

        <View style={styles.contentContainer}>
          <Section title="First Semester">
            <Books semesterId={1} />
          </Section>

          <Section title="Second Semester">
            <Books semesterId={2} />
          </Section>

          <Section title="Third Semester">
            <Books semesterId={3} />
          </Section>
          <Section title="Fourth Semester">
            <Books semesterId={1} />
          </Section>

          <Section title="Fifth Semester">
            <Books semesterId={2} />
          </Section>

          <Section title="Sixth Semester">
            <Books semesterId={3} />
          </Section>

          <Section title="Seventh Semester">
            <Books semesterId={2} />
          </Section>

          <Section title="Eighth Semester">
            <Books semesterId={3} />
          </Section>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 5,
  },
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#090C13',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
    marginBottom: 12,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: '#212121',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBar: {
    flex: 1,
    height: 40,
    paddingVertical: 8,
    fontSize: 16,
    color: 'rgba(120,120,120,1)',
  },
});

export default Library;
