import React from 'react';
import {
  SafeAreaView,
  // StyleSheet
} from 'react-native';
import MediaView from './components/MediaView';

import {ChannelProvider} from './contexts/ChannelContext';
import ChannelNavigation from './components/ChannelNavigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ChannelProvider>
        <MediaView />
        <ChannelNavigation />
      </ChannelProvider>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({});

export default App;
