import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import {CHANNELS} from '../data/channels';
import NavigationItem from './NavigationItem';

const ChannelNavigation = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);

  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default ChannelNavigation;

const styles = StyleSheet.create({
  container: {
    height: '50',
  },
  wrapper: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#ccc',
    borderWidth: 2,
    backgroundColor: '#f0f0f0',
  },
});
