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
  // const handleSearch = query => {
  //   setSearchQuery(query);
  //   const filtered = notifications.filter(
  //     notification =>
  //       notification.title.toLowerCase().includes(query.toLowerCase()) ||
  //       notification.date.toLowerCase().includes(query.toLowerCase()) ||
  //       notification.content.toLowerCase().includes(query.toLowerCase()),
  //   );
  //   setFilteredNotifications(filtered);
  // };

  return (
    <View style={styles.container}>
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Categories />
        </View>

        <View style={styles.contentContainer}>
          <Section title="First Semesterr">
            <Books semesterId={1} />
          </Section>

          <Section title="Second Semester">
            <Books semesterId={2} />
          </Section>

          <Section title="Third Semester">
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
  seeAllText: {
    color: '#22A699',
    fontSize: 16,
  },
  container: {
    flex: 1,
    paddingTop: 20,
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
  notificationItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    marginBottom: 20,
    backgroundColor: '#212121',
    borderRadius: 7,
    marginLeft: 12,
    marginRight: 12,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(140,140,140,1)',
  },
  notificationContent: {
    fontSize: 16,
    color: '#888',
    color: 'rgba(130,130,130,0.7)',
  },
  notificationDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default Library;
