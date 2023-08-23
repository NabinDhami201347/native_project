import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

LocaleConfig.defaultLocale = 'en';

const ACADEMIC_CALENDAR = {
  '2023-07-01': {selected: true, marked: true, dotColor: 'red'}, // Example date with a dot
  '2023-07-15': {selected: true, marked: true, dotColor: 'blue'}, // Example date with a different color dot
};

const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      <Calendar
        markedDates={ACADEMIC_CALENDAR}
        markingType={'multi-dot'}
        theme={{calendarBackground: '#222'}}
        style={styles.calendar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#272829',
    justifyContent: 'center',
  },
  calendar: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#212121',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
  },
});

export default CalendarScreen;
