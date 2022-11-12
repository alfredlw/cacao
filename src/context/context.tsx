import { useState, useEffect, createContext, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type ContextType = {
  q1?: string[];
  addToQ1?: (answer: string) => void;
  removeFromQ1?: (answer: string) => void;

  q2?: string[];
  addToQ2?: (answer: string) => void;
  removeFromQ2?: (answer: string) => void;

  q3?: string[];
  addToQ3?: (answer: string) => void;
  removeFromQ3?: (answer: string) => void;
  reset?: () =>  void
};

export const AppContext = createContext<ContextType>({});

const AppProvider: FC<Props> = ({ children }) => {
  const [q1, setQ1Value] = useState<string[]>([]);
  const [q2, setQ2Value] = useState<string[]>([]);
  const [q3, setQ3Value] = useState<string[]>([]);

  const reset = ()=> {
    setQ1Value([])
    setQ2Value([])
    setQ3Value([])
  }

  const addToQ1 = (answer: string) => {
    setQ1Value(() => [...q1, answer]);
  };
  const removeFromQ1 = (answer: string) => {
    const newArray = q1.filter((item) => item !== answer);
    setQ1Value(newArray);
  };

  const addToQ2 = (answer: string) => {
    setQ2Value(() => [...q2, answer]);
  };
  const removeFromQ2 = (answer: string) => {
    const newArray = q2.filter((item) => item !== answer);
    setQ2Value(newArray);
  };

  const addToQ3 = (answer: string) => {
    setQ3Value(() => [...q3, answer]);
  };
  const removeFromQ3 = (answer: string) => {
    const newArray = q3.filter((item) => item !== answer);
    setQ3Value(newArray);
  };

  return (
    <AppContext.Provider
      value={{
        q1,
        addToQ1,
        removeFromQ1,
        q2,
        addToQ2,
        removeFromQ2,
        q3,
        addToQ3,
        removeFromQ3,
        reset
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
