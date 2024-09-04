import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MediaView from './components/MediaView';

import {ChannelProvider} from './contexts/ChannelContext';
import ChannelNavigation from './components/ChannelNavigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ChannelProvider>
        <MediaView />
        <ChannelNavigation />
      </ChannelProvider>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
