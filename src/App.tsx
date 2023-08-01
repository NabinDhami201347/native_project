import 'react-native-gesture-handler';

import Routes from './navigation';
import {AuthProvider} from './contexts/Auth';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
