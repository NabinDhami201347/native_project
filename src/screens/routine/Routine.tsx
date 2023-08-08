import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {facultyMembers, scheduleData, semesters} from '../../constants/routine';

interface ScheduleItem {
  subject: string;
  time: string;
}

const RoutineScreen: React.FC = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<string>(
    facultyMembers[0].id,
  );
  const [selectedSemester, setSelectedSemester] = useState<string>(
    semesters[0].id,
  );

  const scheduleKey: string = `${selectedFaculty}_${selectedSemester}`;
  // @ts-ignore
  const schedule: ScheduleItem[] | undefined = scheduleData[scheduleKey];

  const renderSelection = (
    data: {id: string; name: string}[],
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.selectionItem,
              state === item.id ? styles.selected : null,
            ]}
            onPress={() => setState(item.id)}>
            <Text
              style={[
                styles.selectionText,
                state === item.id ? styles.selectedText : null,
              ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    );
  };

  const renderSchedule = () => {
    const daysSchedule = Object.entries(schedule || {});
    return (
      <FlatList
        data={daysSchedule}
        renderItem={({item}) => (
          <View style={styles.scheduleItem}>
            <Text style={styles.dayText}>{item[0]}</Text>
            <View style={styles.subjectsContainer}>
              {/* @ts-ignore */}
              {item[1].map((subjectItem, index) => (
                <View key={index} style={styles.subjectItem}>
                  <Text style={styles.subjectText}>{subjectItem.subject}</Text>
                  <Text style={styles.timeText}>{subjectItem.time}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectionContainer}>
        <Text style={styles.subHeading}>Select Faculty</Text>
        {renderSelection(facultyMembers, selectedFaculty, setSelectedFaculty)}
      </View>
      <View style={styles.selectionContainer}>
        <Text style={styles.subHeading}>Select Semester</Text>
        {renderSelection(semesters, selectedSemester, setSelectedSemester)}
      </View>
      <Text style={styles.subHeading}>Routine Schedule</Text>
      <View style={styles.scheduleContainer}>{renderSchedule()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090C13',
    paddingHorizontal: 10,
    paddingTop: 60,
  },
  header1: {
    marginLeft: 13,
    marginTop: 0,
    marginBottom: 15,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white',
  },
  selectionContainer: {
    marginBottom: 16,
  },
  selectionItem: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 4,
  },
  selectionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  selected: {
    backgroundColor: '#B508F1',
  },
  selectedText: {
    color: '#fff',
  },
  scheduleContainer: {
    flex: 1,
    backgroundColor: '#212121',
    borderRadius: 8,
    padding: 10,
  },
  scheduleItem: {
    paddingVertical: 10,
    borderRadius: 7,
  },
  dayText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 9,
  },
  subjectsContainer: {
    flex: 1,
    marginTop: 10,
  },
  subjectItem: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 7,
    backgroundColor: '#B508F1',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 17,
  },
  subjectText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  timeText: {
    fontSize: 14,
    color: 'white',
  },
});

export default RoutineScreen;
