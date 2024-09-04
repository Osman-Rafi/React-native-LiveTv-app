import React, {useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TVEventHandler,
  useTVEventHandler,
  Pressable,
  Text,
} from 'react-native';

import {CHANNELS} from '../data/channels';
import NavigationItem from './NavigationItem';

const ChannelNavigation = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);

  const myTVEventHandler = evt => {
    if (evt.eventType === 'left') {
      // if (buttonRef.current) {
      //   buttonRef.current.setNativeProps({hasTVPreferredFocus: true});
      // }
    }
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
