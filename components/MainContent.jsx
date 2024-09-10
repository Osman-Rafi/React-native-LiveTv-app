import React, {useState, useCallback, useContext, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import MediaView from './MediaView';
import ChannelNavigation from './ChannelNavigation';
import {ChannelContext} from '../contexts/ChannelContext';

export default function MainContent() {
  const [loading, setLoading] = useState(false);
  const {setChannels, setIsFullscreenEnable, channels, setActiveChannel} =
    useContext(ChannelContext);

  const fetchChannels = useCallback(() => {
    // console.log('Fetching from JSONBin...');
    setLoading(true);
    fetch('https://api.jsonbin.io/v3/b/66df1854acd3cb34a880c420', {
      method: 'GET',
      headers: {
        'X-Master-Key':
          '$2a$10$Yqs4Jyzkg.lVCcdXJCiF2u3.WEtPct1oAeu5lEa2Nf4v0Fkv5PFFi',
      },
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data.record);
        setIsFullscreenEnable(false);
        setChannels(data.record);
        // setActiveChannel(channels[0].id);
      })
      .then(() => {
        setTimeout(() => {
          setIsFullscreenEnable(true);
        }, 10000);
      })
      .catch(error => {
        console.error('Error fetching JSONBin data:', error);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchChannels();
  }, [fetchChannels]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
      <MediaView />
      <ChannelNavigation />
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
});
