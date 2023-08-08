import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface CalendarCardProps {
  date: string;
  event: string;
  holiday?: boolean;
}

const CalendarCard: React.FC<CalendarCardProps> = ({date, event, holiday}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.dateText}>{date}</Text>
        <Text style={[styles.eventText, holiday && {color: 'red'}]}>
          {event}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: '#212121',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginVertical: 8,
  },
  card: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 18,
    color: 'whitesmoke',
  },
  eventText: {
    fontSize: 14,
    color: '#FFF5F5',
  },
});

export default CalendarCard;
