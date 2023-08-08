export interface FacultyMember {
  id: string;
  name: string;
}

export interface Semester {
  id: string;
  name: string;
}

export interface ScheduleItem {
  subject: string;
  time: string;
}

export interface ScheduleData {
  [key: string]: ScheduleItem[];
}

export const facultyMembers: FacultyMember[] = [
  {id: '1', name: 'Computer'},
  {id: '2', name: 'Civil'},
  {id: '3', name: 'IT'},
  {id: '4', name: 'Software'},
  {id: '5', name: 'Electronic'},
  {id: '6', name: 'BCA'},
];

export const semesters: Semester[] = [
  {id: '1', name: 'Semester 1'},
  {id: '2', name: 'Semester 2'},
  {id: '3', name: 'Semester 3'},
  {id: '4', name: 'Semester 4'},
  {id: '5', name: 'Semester 5'},
  {id: '6', name: 'Semester 6'},
  {id: '7', name: 'Semester 7'},
  {id: '8', name: 'Semester 8'},
];

export const scheduleData: ScheduleData = {
  '1_1': [
    {subject: 'Chemistry', time: '4 hrs'},
    {subject: 'Programming in c', time: '3 hrs'},
    {subject: 'Engineering Mathematics I', time: '3 hrs'},
    {subject: 'Communication Techniques', time: '3 hrs'},
    {subject: 'Basic Electrical Engineering', time: '3 hrs'},
    {subject: 'Mechanical Workshop', time: '3 hrs'},
  ],
  '1_2': [
    {subject: 'English', time: '2 hrs'},
    {subject: 'History', time: '4 hrs'},
  ],
  '1_3': [
    {subject: 'Physics', time: '3 hrs'},
    {subject: 'Chemistry', time: '3 hrs'},
  ],
  '1_4': [
    {subject: 'Biology', time: '3 hrs'},
    {subject: 'Geography', time: '3 hrs'},
  ],
  '1_5': [
    {subject: 'Mathematics', time: '3 hrs'},
    {subject: 'Computer Science', time: '3 hrs'},
  ],
  '1_6': [
    {subject: 'Economics', time: '3 hrs'},
    {subject: 'Accounting', time: '3 hrs'},
  ],
  '1_7': [
    {subject: 'Art', time: '3 hrs'},
    {subject: 'Music', time: '3 hrs'},
  ],
  '1_8': [
    {subject: 'Physical Education', time: '2 hrs'},
    {subject: 'Health Science', time: '2 hrs'},
  ],
};
