import React, {useContext} from 'react';
import {ToastAndroid} from 'react-native';

import {ChannelContext} from '../contexts/ChannelContext';

export const useNotify = () => {
  const {channels, activeChannel} = useContext(ChannelContext);

  const activeChannelName = channels.find(
    channel => channel.id === activeChannel,
  );

  return () => {
    if (activeChannelName) {
      ToastAndroid.show(`Playing ${activeChannelName.title}`, ToastAndroid.SHORT);
    }
  };
};
