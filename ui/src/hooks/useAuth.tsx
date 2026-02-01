import { createContext, useContext, useState, ReactNode } from "react";

const TOKEN_KEY = "tanaji_token";

interface AuthContextType {
  token: string | null;
  setToken: (t: string | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setTokenState] = useState<string | null>(
    () => localStorage.getItem(TOKEN_KEY)
  );
  const setToken = (t: string | null) => {
    if (t) localStorage.setItem(TOKEN_KEY, t);
    else localStorage.removeItem(TOKEN_KEY);
    setTokenState(t);
  };
  const logout = () => setToken(null);
  return (
    <AuthContext.Provider value={{ token, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) return { token: localStorage.getItem(TOKEN_KEY), setToken: () => {}, logout: () => {} };
  return ctx;
}
