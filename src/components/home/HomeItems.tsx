import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface HomeItem {
  name: string;
  iconName: string;
  color: string;
}

const data: HomeItem[] = [
  {
    name: 'Homework',
    iconName: 'school',
    color: 'rgba(150, 140, 200, 0.6)',
  },
  {
    name: 'Attendance',
    iconName: 'checkmark-circle',
    color: 'rgba(100, 200, 250, 0.6)',
  },
  {
    name: 'Routine',
    iconName: 'time',
    color: 'rgba(181, 100, 241, 0.6)',
  },
  {
    name: 'Library',
    iconName: 'library',
    color: 'rgba(111, 201, 181, 0.6)',
  },
  {
    name: 'Result',
    iconName: 'medal-outline',
    color: 'rgba(249, 132, 74, 0.6)',
  },
  {
    name: 'Syllabus',
    iconName: 'document-text-outline',
    color: 'rgba(230, 170, 60, 0.6)',
  },
  {
    name: 'Notice',
    iconName: 'paper-plane-outline',
    color: 'rgba(98, 172, 189, 0.6)',
  },
  {
    name: 'Payment',
    iconName: 'card-outline',
    color: 'rgba(176, 201, 66, 0.6)',
  },
];

const HomeItems: React.FC = () => {
  const iconSize: number = 40;

  const renderItem = ({item}: {item: HomeItem}) => (
    <TouchableOpacity style={styles.tc}>
      <View style={[styles.circle, {backgroundColor: item.color}]}>
        <Ionicons name={item.iconName} size={iconSize} color="white" />
      </View>
      <Text style={[styles.topic, styles.topicText]}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.flexbox}>
        {data.map((item, index) => (
          <React.Fragment key={index}>{renderItem({item})}</React.Fragment>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  flexbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingLeft: 15,
  },
  tc: {
    margin: 6,
    width: 80,
    marginBottom: 13,
  },
  topicText: {
    marginLeft: 3,
    color: 'whitesmoke',
    marginTop: 13,
  },
  circle: {
    width: 60,
    height: 60,
    padding: 10,
    borderRadius: 20,
  },
});

export default HomeItems;
