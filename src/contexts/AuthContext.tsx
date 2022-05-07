import { createContext, ReactNode, useState, useEffect } from 'react';
import { auth } from '../services/firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { UserType } from '../config/types';

type AuthContextType = {
  user: UserType | undefined;
  signin: (useProps: createUserProps) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  errorMsg: string;
  isLoading: boolean;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

type createUserProps = {
  email: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<UserType>();
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  async function signin(useProps: createUserProps) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        useProps.email,
        useProps.password,
      );

      const uid = userCredential.user?.uid;

      setUser({
        id: uid || '',
      });
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        setErrorMsg('Este endereço de e-mail já está em uso!');
      } else {
        setErrorMsg(error.message);
      }
    }
  }

  async function login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const uid = userCredential.user?.uid;
      setUser({
        id: uid || '',
      });
    } catch (error) {}
  }

  function logout() {
    signOut(auth).then(() => {
      setUser(undefined);
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user) {
        const { uid } = user;
        setUser({
          id: uid,
        });
      }
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signin,
        login,
        logout,
        errorMsg,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
