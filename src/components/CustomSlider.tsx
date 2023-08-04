import React, {useState, useRef} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

interface SliderItem {
  id: number;
  img: string;
}

const data: SliderItem[] = [
  {
    id: 1,
    img: 'https://images5.alphacoders.com/131/1316292.jpeg',
  },
  {
    id: 2,
    img: 'https://wallpaperaccess.com/full/435.jpg',
  },
  {
    id: 3,
    img: 'https://c4.wallpaperflare.com/wallpaper/373/676/41/kimetsu-no-yaiba-anime-anime-boys-tanjiro-kamado-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg',
  },
  {
    id: 4,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRDxZgQQUFyUBxcDQJUpm9fw5cZJju8K8BQ&usqp=CAU',
  },
  {
    id: 5,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2YKdIUJJW1_cIQ6XlHxjvfb7syCE_cN3Eg&usqp=CAU',
  },
];

const CustomSlider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList<SliderItem>>(null);

  const renderItem = ({item}: {item: SliderItem}) => {
    return (
      <View style={styles.slide}>
        <Image source={{uri: item.img}} style={styles.slideImage} />
      </View>
    );
  };

  const handlePagination = (index: number) => {
    setActiveIndex(index);
    flatListRef.current?.scrollToOffset({
      offset: index * Dimensions.get('window').width,
      animated: true,
    });
  };

  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        <View style={styles.pagination}>
          {data.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.paginationDot,
                index === activeIndex && styles.paginationDotActive,
              ]}
              onPress={() => handlePagination(index)}
            />
          ))}
        </View>
      </View>
    );
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentIndex = Math.round(
      event.nativeEvent.contentOffset.x / Dimensions.get('window').width,
    );
    setActiveIndex(currentIndex);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        onScroll={handleScroll}
      />
      {renderPagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    paddingBottom: 25,
  },
  slide: {
    width: Dimensions.get('window').width,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderColor: 'pink',
    borderWidth: 1,
  },
  paginationContainer: {
    paddingTop: 20,
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: '#B508F1',
  },
});

export default CustomSlider;
