import React, {createContext, useContext, useEffect, useState} from 'react';
import {protectedInstance} from '../api';

export interface INotice {
  id: number;
  title: string;
  description: string;
  tag: string;
  image?: string;
  createdAt: string;
}

type NoticeContextType = {
  notices: INotice[];
  departmentNotices: INotice[];
  collegeNotices: INotice[];
  universityNotices: INotice[];
};

const NoticeContext = createContext<NoticeContextType | undefined>(undefined);

export const NoticeProvider = ({children}: {children: React.ReactNode}) => {
  const [notices, setNotices] = useState<INotice[]>([]);

  useEffect(() => {
    async function fetchNotices() {
      try {
        const response = await protectedInstance.get('/notices');
        setNotices(response.data);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    }

    fetchNotices();
  }, []);

  const contextValue: NoticeContextType = {
    notices: notices,
    departmentNotices: notices.filter(notice => notice.tag === 'DEPARTMENT'),
    collegeNotices: notices.filter(notice => notice.tag === 'COLLEGE'),
    universityNotices: notices.filter(notice => notice.tag === 'UNIVERSITY'),
  };

  return (
    <NoticeContext.Provider value={contextValue}>
      {children}
    </NoticeContext.Provider>
  );
};

export const useNoticeContext = () => {
  const context = useContext(NoticeContext);
  if (!context) {
    throw new Error('useNoticeContext must be used within a NoticeProvider');
  }
  return context;
};
