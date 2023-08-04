import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface CustomCardProps {
  title: string;
  icon: any;
  content: string;
}

const CustomCard: React.FC<CustomCardProps> = ({title, icon, content}) => {
  return (
    <View style={styles.card}>
      <Icon name={icon} size={24} color="white" />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardText}>{content}</Text>
      </View>
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#212121',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    width: '100%',
    flex: 1,
  },
  cardContent: {
    marginLeft: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'white',
  },
  cardText: {
    fontSize: 16,
    color: 'white',
  },
});
