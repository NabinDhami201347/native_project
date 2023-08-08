import React, {
  useEffect,
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useMemo,
  useCallback,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {UserData} from '../types';
import {protectedInstance} from '../api';
import LoadingScreen from '../screens/Loading';

type AuthContextValue = {
  user: UserData | null;
  access_token: string | null;
  refresh_token: string | null;
  isLoading: boolean;
  userDataFetched: boolean;
  setTokens: (access_token: string, refresh_token: string) => Promise<void>;
  removeTokens: () => Promise<void>;
  updateUser: (userData: UserData) => void;
};

enum ActionTypes {
  SetTokens,
  RemoveTokens,
  SetUser,
  SetLoading,
  UpdateUser,
  SetUserDataFetched,
}

interface Action {
  type: ActionTypes;
  payload?: any;
}

const initialState: AuthContextValue = {
  user: null,
  access_token: null,
  refresh_token: null,
  isLoading: true,
  userDataFetched: false,
  setTokens: async (_access_token, _refresh_token) => {},
  removeTokens: async () => {},
  updateUser: (userData: UserData) => {},
};

const authReducer = (
  state: AuthContextValue,
  action: Action,
): AuthContextValue => {
  switch (action.type) {
    case ActionTypes.SetTokens:
      return {
        ...state,
        access_token: action.payload.access_token,
        refresh_token: action.payload.refresh_token,
      };

    case ActionTypes.RemoveTokens:
      return {...state, access_token: null, refresh_token: null};

    case ActionTypes.SetUser:
      return {...state, user: action.payload};

    case ActionTypes.SetLoading:
      return {...state, isLoading: action.payload};

    case ActionTypes.UpdateUser:
      return {...state, user: action.payload};

    case ActionTypes.SetUserDataFetched: // Handle new action
      return {...state, userDataFetched: true};

    default:
      return state;
  }
};

const AuthContext = createContext<AuthContextValue | null>(initialState);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        if (state.userDataFetched) {
          setLoading(false);
          return;
        }

        await new Promise(resolve => setTimeout(resolve, 2000));

        const userAccessToken = await AsyncStorage.getItem('userAccessToken');
        const userRefreshToken = await AsyncStorage.getItem('userRefreshToken');

        if (userAccessToken && userRefreshToken) {
          const {data} = await protectedInstance.get('auth/profile');

          dispatch({type: ActionTypes.SetUser, payload: data});
        }

        dispatch({
          type: ActionTypes.SetTokens,
          payload: {
            access_token: userAccessToken || null,
            refresh_token: userRefreshToken || null,
          },
        });

        dispatch({type: ActionTypes.SetUserDataFetched});
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    bootstrapAsync();
  }, [state.userDataFetched]);
  const updateUser = (userData: UserData) => {
    dispatch({type: ActionTypes.UpdateUser, payload: userData});
  };

  const setStoredTokens = useCallback(
    async (newAccessToken: string, newRefreshToken: string): Promise<void> => {
      try {
        await AsyncStorage.setItem('userAccessToken', newAccessToken);
        await AsyncStorage.setItem('userRefreshToken', newRefreshToken);
        dispatch({
          type: ActionTypes.SetTokens,
          payload: {
            access_token: newAccessToken,
            refresh_token: newRefreshToken,
          },
        });
      } catch (error) {}
    },
    [],
  );

  const removeTokens = useCallback(async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem('userAccessToken');
      await AsyncStorage.removeItem('userRefreshToken');
      dispatch({type: ActionTypes.RemoveTokens});
    } catch (error) {}
  }, []);

  const authContextValue = useMemo(
    () => ({
      ...state,
      setTokens: setStoredTokens,
      removeTokens,
      updateUser,
    }),
    [state, setStoredTokens, removeTokens],
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {loading ? <LoadingScreen /> : children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
