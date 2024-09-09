import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, useTVEventHandler, BackHandler} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

import {ChannelContext} from '../contexts/ChannelContext';
// import WebView from 'react-native-android-fullscreen-webview-video';

export default function MediaView() {
  const {activeChannel, isFullscreenEnable, setIsFullscreenEnable} =
    useContext(ChannelContext);

  useEffect(() => {
    const handleBackButtonClick = () => {
      console.log(isFullscreenEnable);
      if (isFullscreenEnable) {
        setIsFullscreenEnable(false);
      } else {
        BackHandler.exitApp();
      }
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);

    // Cleanup function
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  });

  const myTVEventHandler = evt => {
    // console.log(evt.eventType);
    if (evt.eventType === 'select') {
      setIsFullscreenEnable(true);
    }
  };

  useTVEventHandler(myTVEventHandler);

  return (
    <View style={[isFullscreenEnable ? null : styles.container]}>
      <YoutubePlayer
        height="100%"
        width="100%"
        play={true}
        videoId={activeChannel}
        title=""
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
