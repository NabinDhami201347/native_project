import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {
  ScheduleItem,
  facultyMembers,
  scheduleData,
  semesters,
} from '../../constants/syllabus';

const Syllabus: React.FC = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<string>(
    facultyMembers[0].id,
  );
  const [selectedSemester, setSelectedSemester] = useState<string>(
    semesters[0].id,
  );

  const scheduleKey: string = `${selectedFaculty}_${selectedSemester}`;
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
    return (
      <FlatList
        data={schedule}
        renderItem={({item}) => (
          <TouchableOpacity>
            <View style={styles.scheduleItem}>
              <Text style={styles.subjectText}>{item.subject}</Text>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
          </TouchableOpacity>
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

      <Text style={styles.subHeading}>Subjects</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    marginRight: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#444',
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
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#B508F1',
    padding: 16,
    borderRadius: 7,
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

export default Syllabus;
