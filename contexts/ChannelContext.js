import React, {useState, createContext} from 'react';

export const ChannelContext = createContext('');

export const ChannelProvider = ({children}) => {
  const [activeChannel, setActiveChannel] = useState('');
  const [isFullscreenEnable, setIsFullscreenEnable] = useState(false);
  const [channels, setChannels] = useState([]);

  return (
    <ChannelContext.Provider
      value={{
        activeChannel,
        setActiveChannel,
        isFullscreenEnable,
        setIsFullscreenEnable,
        channels,
        setChannels,
      }}>
      {children}
    </ChannelContext.Provider>
  );
};
