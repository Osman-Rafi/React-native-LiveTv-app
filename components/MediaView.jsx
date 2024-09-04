import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {ChannelContext} from '../contexts/ChannelContext';

export default function MediaView() {
  const {activeChannel} = useContext(ChannelContext);

  return (
    <View>
      <Text style={{color: '#000000'}}>{activeChannel}</Text>

      {/* <YoutubePlayer
        height={300}
        play={true}
        videoId={videoId}
        allowWebViewZoom={true}
        webViewProps={{
          javaScriptEnabled: true, // Ensure JS is enabled
          domStorageEnabled: true, // Enable DOM storage
        }}
      /> */}
    </View>
  );
}
