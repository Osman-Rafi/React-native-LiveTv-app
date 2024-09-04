import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';

import {CHANNELS} from '../data/channels';

export default function NavigationItem(props) {
  const {title, image, index, focusedIndex, setFocusedIndex, setVideoId} =
    props;

  return (
    <TouchableOpacity
      style={styles.item}
      onFocus={() => {
        setFocusedIndex(index);
        setVideoId(CHANNELS[index].id);
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
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  placeholderImage: {
    width: 150,
    height: 150,
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
