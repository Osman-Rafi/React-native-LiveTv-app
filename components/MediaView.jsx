import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

import {ChannelContext} from '../contexts/ChannelContext';

export default function MediaView() {
  const {activeChannel} = useContext(ChannelContext);

  return (
    <View style={styles.container}>
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
