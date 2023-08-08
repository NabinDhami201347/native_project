import React from 'react';
import {BarChart} from 'react-native-chart-kit';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const RESULT_DATA: {[key: string]: number} = {
  Math: 90,
  Physics: 80,
  Thermal: 85,
  Applied: 60,
  Drawing: 30,
  OOP: 39,
};

const ResultScreen: React.FC = () => {
  // Calculate grades based on result
  const calculateGrade = (result: number): string => {
    if (result >= 90) {
      return 'A';
    } else if (result >= 80) {
      return 'A-';
    } else if (result >= 70) {
      return 'B+';
    } else if (result >= 60) {
      return 'B';
    } else if (result >= 50) {
      return 'B-';
    } else if (result >= 40) {
      return 'C';
    } else {
      return 'F';
    }
  };

  // Prepare data for the bar chart
  const data = {
    labels: Object.keys(RESULT_DATA),
    datasets: [
      {
        data: Object.values(RESULT_DATA),
      },
    ],
  };

  // Customize the x-axis labels with grades
  const chartConfig = {
    backgroundColor: 'white',
    backgroundGradientFrom: 'rgba(100,100,200,0.5)',
    backgroundGradientFromOpacity: 0.5,
    backgroundGradientTo: 'rgba(200,100,100,0.5)',
    backgroundGradientToOpacity: 0.5,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 9,
    },
    barPercentage: 0.7,
    // Custom x-axis labels
    labels: Object.keys(RESULT_DATA).map(subject =>
      calculateGrade(RESULT_DATA[subject]),
    ),
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.chartContainer}>
          <BarChart
            data={data}
            width={400}
            height={250}
            yAxisLabel=""
            chartConfig={chartConfig}
          />
        </View>
        {Object.entries(RESULT_DATA).map(([subject, result]) => (
          <View key={subject} style={styles.resultItem}>
            <Text style={styles.subjectText}>{subject}</Text>
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>Marks: {result}</Text>
              <Text
                style={[
                  styles.gradeText,
                  result < 60 ? styles.gradeFail : null,
                ]}>
                Grade: {calculateGrade(result)}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090C13',
    padding: 16,
  },
  header1: {
    marginLeft: 13,
    marginTop: 0,
    marginBottom: 15,
  },
  chartContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  barChart: {
    borderRadius: 9,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'rgb(130,130,130)',
  },
  resultItem: {
    marginBottom: 25,
  },
  subjectText: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'rgb(130,130,130)',
  },
  resultText: {
    fontSize: 16,
    color: 'rgb(120,120,120)',
  },
  gradeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2ecc71', // Green color for grade
  },
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2, // Adjust the margin here as needed
    paddingRight: 150,
    paddingLeft: 0,
  },
  gradeFail: {
    color: '#e74c3c', // Red color for F grade
  },
});

export default ResultScreen;
