import React, { createContext, useCallback, useContext, useState } from 'react';
import {
  ReactFacebookFailureResponse,
  ReactFacebookLoginInfo,
} from 'react-facebook-login';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  useGoogleLogout,
} from 'react-google-login';
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
  signInGoogle(Fw: GoogleLoginResponse | GoogleLoginResponseOffline): void;
  signInFacebook(
    userInfo: ReactFacebookLoginInfo | ReactFacebookFailureResponse,
  ): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const { signOut: signOutGoogle } = useGoogleLogout({
    clientId: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
  });

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
    localStorage.setItem(
      '@Collaboration:user',
      JSON.stringify(userLogin.email),
    );

    setData({ token, user: userLogin.email });
  }, []);

  const signInGoogle = useCallback(
    async ({ accessToken: token, profileObj }: GoogleLoginResponse) => {
      localStorage.setItem('@Collaboration:token', token);
      localStorage.setItem(
        '@Collaboration:user',
        JSON.stringify({ email: profileObj.email }),
      );

      setData({ token, user: { email: profileObj.email } });
    },
    [],
  );

  const signInFacebook = useCallback(
    async ({ accessToken: token, email }: ReactFacebookLoginInfo) => {
      localStorage.setItem('@Collaboration:token', token);
      localStorage.setItem('@Collaboration:user', JSON.stringify({ email }));

      setData({ token, user: { email } });
    },
    [],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@Collaboration:token');
    localStorage.removeItem('@Collaboration:user');
    signOutGoogle();
    setData({} as IAuthState);
  }, [signOutGoogle]);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, signInGoogle, signInFacebook }}
    >
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
