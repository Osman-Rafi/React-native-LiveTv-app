import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import MainContent from './components/MainContent';
import {ChannelProvider} from './contexts/ChannelContext';

function App(): React.JSX.Element {
  return (
    <ChannelProvider>
      <SafeAreaView style={styles.container}>
        <MainContent />
      </SafeAreaView>
    </ChannelProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
