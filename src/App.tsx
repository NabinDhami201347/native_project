import 'react-native-gesture-handler';

import Routes from './navigation';
import {AuthProvider} from './contexts/Auth';
import {BookProvider} from './contexts/Book';

export default function App() {
  // return (
  //   <AuthProvider>
  //     <BookProvider>
  //       <Routes />
  //     </BookProvider>
  //   </AuthProvider>
  // );
  return <Routes />;
}
