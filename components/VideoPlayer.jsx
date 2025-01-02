import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Video, {VideoRef} from 'react-native-video';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  // const background = require('./background.mp4');

  return (
    <Video
      // Can be a URL or a local file.
      source={'http://srzone.live/live-tv/tsports.html'}
      // Store reference
      ref={VideoRef}
      style={styles.backgroundVideo}
    />
  );
};

// Later in your styles...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
});

export default VideoPlayer;
