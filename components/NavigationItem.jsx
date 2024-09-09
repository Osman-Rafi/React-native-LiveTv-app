import React, {useEffect, useContext, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  TVEventHandler,
  useTVEventHandler,
} from 'react-native';

// import {channels} from '../data/channels';
import {ChannelContext} from '../contexts/ChannelContext';

export default function NavigationItem(props) {
  const itemRefs = useRef([]);
  const {title, image, index, focusedIndex, setFocusedIndex} = props;
  const {activeChannel, setActiveChannel, isFullscreenEnable, channels} =
    useContext(ChannelContext);

  useEffect(() => {
    setFocusedIndex(0);
    setActiveChannel(channels[0].id);
    if (index === 0) {
      itemRefs.current[index].setNativeProps({hasTVPreferredFocus: true});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const myTVEventHandler = evt => {
    // console.log(evt.eventType);
    if (isFullscreenEnable) {
      const activeIndex = channels.findIndex(
        channel => channel.id === activeChannel,
      );
      if (evt.eventType === 'up') {
        if (channels[activeIndex + 1]) {
          setActiveChannel(channels[activeIndex + 1].id);
        }
      } else if (evt.eventType === 'down') {
        if (channels[activeIndex - 1]) {
          setActiveChannel(channels[activeIndex - 1].id);
        }
      }
    }
  };

  useTVEventHandler(myTVEventHandler);

  return (
    <TouchableOpacity
      ref={ref => (itemRefs.current[index] = ref)}
      style={styles.item}
      onFocus={() => {
        setFocusedIndex(index);
        setActiveChannel(channels[index].id);
      }}
      activeOpacity={1}>
      <View style={styles.content}>
        {image ? (
          <Image
            style={[
              styles.image,
              index === focusedIndex
                ? styles.focusedItem
                : styles.unFocusedItem,
            ]}
            source={{uri: image}}
            resizeMode="cover"
          />
        ) : (
          <View
            style={[
              styles.placeholderImage,
              index === focusedIndex
                ? styles.focusedItem
                : styles.unFocusedItem,
            ]}>
            <Text style={styles.placeholderText}>No Image</Text>
          </View>
        )}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  placeholderImage: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
  },
  item: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  focusedItem: {
    borderColor: 'blue',
    borderWidth: 2,
    opacity: 1,
  },
  unFocusedItem: {
    borderColor: 'grey',
    borderWidth: 2,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    color: '#333',
  },
});
