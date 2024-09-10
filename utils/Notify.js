import React from 'react';
import {ToastAndroid} from 'react-native';

export const showToast = message => {
  ToastAndroid.show(message, ToastAndroid.LONG);
};

// const showToastWithGravity = () => {
//   ToastAndroid.showWithGravity(
//     'All Your Base Are Belong To Us',
//     ToastAndroid.SHORT,
//     ToastAndroid.CENTER,
//   );
// };

// const showToastWithGravityAndOffset = () => {
//   ToastAndroid.showWithGravityAndOffset(
//     'A wild toast appeared!',
//     ToastAndroid.LONG,
//     ToastAndroid.BOTTOM,
//     25,
//     50,
//   );
// };
