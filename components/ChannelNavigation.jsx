import React, {useState, useContext} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TVEventHandler,
  useTVEventHandler,
} from 'react-native';

import {ChannelContext} from '../contexts/ChannelContext';
import {CHANNELS} from '../data/channels';
import NavigationItem from './NavigationItem';

const ChannelNavigation = () => {
  const {activeChannel, setActiveChannel} = useContext(ChannelContext);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const myTVEventHandler = evt => {
    console.log(evt.eventType);
  };

  useTVEventHandler(myTVEventHandler);

  return (
    <>
      <View>
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
      <FlatList
        horizontal
        data={CHANNELS}
        style={styles.wrapper}
        renderItem={({item, index}) => (
          <NavigationItem
            index={index}
            title={item.title}
            image={item.image}
            focusedIndex={focusedIndex}
            setFocusedIndex={setFocusedIndex}
            setVideoId={setActiveChannel}
          />
        )}
        keyExtractor={item => item.title}
      />
    </>
  );
};

export default ChannelNavigation;

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#ccc',
    borderWidth: 2,
    backgroundColor: '#f0f0f0',
  },
});
