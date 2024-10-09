import React, { createContext, ReactNode, useContext, useState } from 'react';

interface AuthProps {
  children: ReactNode
}

interface AuthContextType {
  authUser: User | null;
  setAuthUser: (user: User | null) => void ;
}

export interface User {
  _id: string | number;
  fullName: string;
  username: string;
  profilePic: string;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: React.FC<AuthProps> = ({children}) => {

  const localStorageUser = () => {
    const user = localStorage.getItem('chat-user');
    if (user) {
      return JSON.parse(user)
    }

    return null
  }

  const user = localStorageUser();

  const [authUser, setAuthUser] = useState<User | null>(user);

  return (
    <AuthContext.Provider value={{authUser, setAuthUser}}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthContextProvider");
  }
  return context;
};

