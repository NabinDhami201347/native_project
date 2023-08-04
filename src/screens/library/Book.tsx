import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

import Books from '../../components/book/Books';
import CustomButton from '../../components/CustomButton';
import {
  LargeHeading,
  Paragraph,
  SmallHeading,
} from '../../components/CustomHeading';

const Book = ({route}: any) => {
  const {image, title, description, author, available, totalBooks, semesterId} =
    route.params;
  const availabilityText = `Available: ${available} / Total: ${totalBooks}`;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: image}}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textContainer}>
          <LargeHeading>{title}</LargeHeading>
          <Paragraph style={{paddingVertical: 5}}>{description}</Paragraph>
          <SmallHeading style={{color: '#1B9C85'}}>
            {availabilityText}
          </SmallHeading>
          <SmallHeading>{author}</SmallHeading>

          <CustomButton
            title="Queue"
            backgroundColor="#1B9C85"
            onPress={() => {}}
          />
        </View>
      </View>
      <LargeHeading style={{paddingVertical: 10}}>
        Recommended Books
      </LargeHeading>
      <Books semesterId={semesterId} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090C13',
    padding: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical: 20,
    gap: 10,
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 4,
  },
  textContainer: {
    flex: 1,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
  },
  availabilityContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  availabilityText: {
    fontSize: 12,
  },
});

export default Book;
