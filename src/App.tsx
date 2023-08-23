import 'react-native-gesture-handler';

import Routes from './navigation';
import {AuthProvider} from './contexts/Auth';
import {BookProvider} from './contexts/Book';
import {NoticeProvider} from './contexts/Notice';

export default function App() {
  return (
    <AuthProvider>
      <BookProvider>
        <NoticeProvider>
          <Routes />
        </NoticeProvider>
      </BookProvider>
    </AuthProvider>
  );
}
