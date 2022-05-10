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
  clearErrorMsg: () => void;
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
      setErrorMsg('');
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
      throw error;
    }
  }

  async function login(email: string, password: string) {
    try {
      setErrorMsg('');
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const uid = userCredential.user?.uid;
      setUser({
        id: uid || '',
      });
    } catch (error) {
      setErrorMsg('E-mail e/ou senha inválido(s)');
      throw error;
    }
  }

  function logout() {
    signOut(auth).then(() => {
      setUser(undefined);
    });
  }

  function clearErrorMsg() {
    setErrorMsg('');
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
        clearErrorMsg,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
