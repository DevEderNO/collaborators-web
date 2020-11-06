import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface IAuthState {
  token: string;
  user: object;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthContextData {
  user: object;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@Collaboration:token');
    const user = localStorage.getItem('@Collaboration:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const userLogin = { email, password };
    const response = await api.post('login', userLogin);

    const { accessToken: token } = response.data;

    localStorage.setItem('@Collaboration:token', token);
    localStorage.setItem('@Collaboration:user', JSON.stringify(userLogin));

    setData({ token, user: userLogin });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Collaboration:token');
    localStorage.removeItem('@Collaboration:user');

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
