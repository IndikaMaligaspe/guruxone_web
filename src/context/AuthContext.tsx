import React, { createContext, useContext, useState } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  user: { role: string } | null;
  login: (data: { email: string, password: string }) => void;
  logout: () => void;
};


interface Props {
    children: React.ReactNode;
  }

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };

export const AuthProvider: React.FC<Props> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<{ role: string } | null>(null);

  const login = (data: { email: string, password: string }) => {
    console.log("LOGGING IN")
    // Simulating API login
    if (data.email === 'admin@example.com') {
      setUser({ role: 'admin' });
    } else {
      setUser({ role: 'member' });
    }
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
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
