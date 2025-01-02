import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ToastProvider} from 'react-native-toast-notifications';

import MainContent from './components/MainContent';
import {ChannelProvider} from './contexts/ChannelContext';

function App(): React.JSX.Element {
  return (
    <ToastProvider>
      <ChannelProvider>
        <SafeAreaView style={styles.container}>
          <MainContent />
        </SafeAreaView>
      </ChannelProvider>
    </ToastProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
