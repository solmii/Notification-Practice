/**
 * @format
 */

import { AppRegistry, Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import { name as appName } from './app.json';

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  // const status = remoteMessage.data.status;
  // const followerName = remoteMessage.data.followerName;
  // if (status === 'change') {
  //   Alert.alert(
  //     'Check it out right now!',
  //     `The asset information of ${followerName} you are following has changed.`,
  //   );
  // }
  // console.log(remoteMessage);
  console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
