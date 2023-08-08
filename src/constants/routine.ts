export interface ScheduleItem {
  subject: string;
  time: string;
}

export interface ScheduleData {
  [key: string]: {
    [key: string]: ScheduleItem[];
  };
}

export const facultyMembers = [
  {id: '1', name: 'Computer'},
  {id: '2', name: 'Civil'},
  {id: '3', name: 'Software'},
  {id: '4', name: 'IT'},
  {id: '5', name: 'BCA'},
  {id: '6', name: 'Electronics'},
];

export const semesters = [
  {id: '1', name: 'First'},
  {id: '2', name: 'Second'},
  {id: '3', name: 'Third'},
  {id: '4', name: 'Fourth'},
  {id: '5', name: 'Fifth'},
  {id: '6', name: 'Sixth'},
  {id: '7', name: 'Seventh'},
  {id: '8', name: 'Eighth'},
];

export const days = [
  {id: '1', name: 'Sunday'},
  {id: '2', name: 'Monday'},
  {id: '3', name: 'Tuesday'},
  {id: '4', name: 'Wednesday'},
  {id: '5', name: 'Thursday'},
  {id: '6', name: 'Friday'},
];

export const scheduleData: ScheduleData = {
  '1_1': {
    Sunday: [
      {subject: 'Mathematics I', time: '8:00 AM - 9:00 AM'},
      {subject: 'Chemistry', time: '9:30 AM - 10:30 AM'},
      {subject: 'BEE', time: '8:00 AM - 9:00 AM'},
      {subject: 'Programming in c', time: '9:30 AM - 10:30 AM'},
    ],
    Monday: [
      {subject: 'BEE', time: '8:30 AM - 9:30 AM'},
      {subject: 'Chemistry', time: '10:00 AM - 11:00 AM'},
      {subject: 'Mathematics I', time: '8:30 AM - 9:30 AM'},
      {subject: 'Programming in c', time: '10:00 AM - 11:00 AM'},
    ],
    Tuesday: [
      {subject: 'English', time: '8:30 AM - 9:30 AM'},
      {subject: 'History', time: '10:00 AM - 11:00 AM'},
    ],
    Wednesday: [
      {subject: 'English', time: '8:30 AM - 9:30 AM'},
      {subject: 'History', time: '10:00 AM - 11:00 AM'},
    ],
    Thrusday: [
      {subject: 'English', time: '8:30 AM - 9:30 AM'},
      {subject: 'History', time: '10:00 AM - 11:00 AM'},
    ],
  },
  '1_2': {
    Sunday: [
      {subject: 'Subject 1', time: '8:00 AM - 9:00 AM'},
      {subject: 'Subject 2', time: '9:30 AM - 10:30 AM'},
    ],
    Monday: [
      {subject: 'Subject 3', time: '8:30 AM - 9:30 AM'},
      {subject: 'Subject 4', time: '10:00 AM - 11:00 AM'},
    ],
  },
  '1_3': {
    Sunday: [
      {subject: 'Subject 1', time: '8:00 AM - 9:00 AM'},
      {subject: 'Subject 2', time: '9:30 AM - 10:30 AM'},
    ],
    Monday: [
      {subject: 'Subject 3', time: '8:30 AM - 9:30 AM'},
      {subject: 'Subject 4', time: '10:00 AM - 11:00 AM'},
    ],
  },
  '1_4': {
    Sunday: [
      {subject: 'Subject 1', time: '8:00 AM - 9:00 AM'},
      {subject: 'Subject 2', time: '9:30 AM - 10:30 AM'},
    ],
    Monday: [
      {subject: 'Subject 3', time: '8:30 AM - 9:30 AM'},
      {subject: 'Subject 4', time: '10:00 AM - 11:00 AM'},
    ],
  },
  '1_5': {
    Sunday: [
      {subject: 'Subject 1', time: '8:00 AM - 9:00 AM'},
      {subject: 'Subject 2', time: '9:30 AM - 10:30 AM'},
    ],
    Monday: [
      {subject: 'Subject 3', time: '8:30 AM - 9:30 AM'},
      {subject: 'Subject 4', time: '10:00 AM - 11:00 AM'},
    ],
  },
  '1_6': {
    Sunday: [
      {subject: 'Subject 1', time: '8:00 AM - 9:00 AM'},
      {subject: 'Subject 2', time: '9:30 AM - 10:30 AM'},
    ],
    Monday: [
      {subject: 'Subject 3', time: '8:30 AM - 9:30 AM'},
      {subject: 'Subject 4', time: '10:00 AM - 11:00 AM'},
    ],
  },
  '1_7': {
    Sunday: [
      {subject: 'Subject 1', time: '8:00 AM - 9:00 AM'},
      {subject: 'Subject 2', time: '9:30 AM - 10:30 AM'},
    ],
    Monday: [
      {subject: 'Subject 3', time: '8:30 AM - 9:30 AM'},
      {subject: 'Subject 4', time: '10:00 AM - 11:00 AM'},
    ],
  },
  '1_8': {
    Sunday: [
      {subject: 'Subject 1', time: '8:00 AM - 9:00 AM'},
      {subject: 'Subject 2', time: '9:30 AM - 10:30 AM'},
    ],
    Monday: [
      {subject: 'Subject 3', time: '8:30 AM - 9:30 AM'},
      {subject: 'Subject 4', time: '10:00 AM - 11:00 AM'},
    ],
  },
  '2_1': {
    Sunday: [
      {subject: 'Subject 1', time: '8:00 AM - 9:00 AM'},
      {subject: 'Subject 2', time: '9:30 AM - 10:30 AM'},
    ],
    Monday: [
      {subject: 'Subject 3', time: '8:30 AM - 9:30 AM'},
      {subject: 'Subject 4', time: '10:00 AM - 11:00 AM'},
    ],
  },
  '2_2': {
    Sunday: [
      {subject: 'Subject 1', time: '8:00 AM - 9:00 AM'},
      {subject: 'Subject 2', time: '9:30 AM - 10:30 AM'},
    ],
    Monday: [
      {subject: 'Subject 3', time: '8:30 AM - 9:30 AM'},
      {subject: 'Subject 4', time: '10:00 AM - 11:00 AM'},
    ],
  },
  '2_3': {
    Sunday: [
      {subject: 'Subject 1', time: '8:00 AM - 9:00 AM'},
      {subject: 'Subject 2', time: '9:30 AM - 10:30 AM'},
    ],
    Monday: [
      {subject: 'Subject 3', time: '8:30 AM - 9:30 AM'},
      {subject: 'Subject 4', time: '10:00 AM - 11:00 AM'},
    ],
  },
  '2_4': {
    Sunday: [
      {subject: 'Subject 1', time: '8:00 AM - 9:00 AM'},
      {subject: 'Subject 2', time: '9:30 AM - 10:30 AM'},
    ],
    Monday: [
      {subject: 'Subject 3', time: '8:30 AM - 9:30 AM'},
      {subject: 'Subject 4', time: '10:00 AM - 11:00 AM'},
    ],
  },
  '2_5': {
    Sunday: [
      {subject: 'Subject 1', time: '8:00 AM - 9:00 AM'},
      {subject: 'Subject 2', time: '9:30 AM - 10:30 AM'},
    ],
    Monday: [
      {subject: 'Subject 3', time: '8:30 AM - 9:30 AM'},
      {subject: 'Subject 4', time: '10:00 AM - 11:00 AM'},
    ],
  },
  '2_6': {
    Sunday: [
      {subject: 'Subject 1', time: '8:00 AM - 9:00 AM'},
      {subject: 'Subject 2', time: '9:30 AM - 10:30 AM'},
    ],
    Monday: [
      {subject: 'Subject 3', time: '8:30 AM - 9:30 AM'},
      {subject: 'Subject 4', time: '10:00 AM - 11:00 AM'},
    ],
  },
  '2_7': {
    Sunday: [
      {subject: 'Subject 1', time: '8:00 AM - 9:00 AM'},
      {subject: 'Subject 2', time: '9:30 AM - 10:30 AM'},
    ],
    Monday: [
      {subject: 'Subject 3', time: '8:30 AM - 9:30 AM'},
      {subject: 'Subject 4', time: '10:00 AM - 11:00 AM'},
    ],
  },
  '2_8': {
    Sunday: [
      {subject: 'Subject 1', time: '8:00 AM - 9:00 AM'},
      {subject: 'Subject 2', time: '9:30 AM - 10:30 AM'},
    ],
    Monday: [
      {subject: 'Subject 3', time: '8:30 AM - 9:30 AM'},
      {subject: 'Subject 4', time: '10:00 AM - 11:00 AM'},
    ],
  },
  '3_1': {
    Sunday: [
      {subject: 'Subject 1', time: '8:00 AM - 9:00 AM'},
      {subject: 'Subject 2', time: '9:30 AM - 10:30 AM'},
    ],
    Monday: [
      {subject: 'Subject 3', time: '8:30 AM - 9:30 AM'},
      {subject: 'Subject 4', time: '10:00 AM - 11:00 AM'},
    ],
  },
};
