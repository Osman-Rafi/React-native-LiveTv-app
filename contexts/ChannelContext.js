import React, {useState, createContext} from 'react';

export const ChannelContext = createContext('');

export const ChannelProvider = ({children}) => {
  const [activeChannel, setActiveChannel] = useState('');

  return (
    <ChannelContext.Provider value={{activeChannel, setActiveChannel}}>
      {children}
    </ChannelContext.Provider>
  );
};
