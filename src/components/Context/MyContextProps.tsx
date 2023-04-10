import React from 'react';

interface MyContextProps {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

const MyContext = React.createContext<MyContextProps>({
  token: '',
  setToken: () => {},
});

export default MyContext;
