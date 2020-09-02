import React, { useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Alert,
  Text,
} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      const status = remoteMessage.data.status;
      const followerName = remoteMessage.data.followerName;
      if (status === 'change') {
        Alert.alert(
          'Check it out right now!',
          `The asset information of ${followerName} you are following has changed.`,
        );
      }
      console.log(remoteMessage);
    });
    return unsubscribe;
  }, []);

  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async (remoteMessage) => {
  //     Alert.alert('제발 되라 제발~~', JSON.stringify(remoteMessage));
  //   });
  //   return unsubscribe;
  // }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <StatusBar translucent barStyle="dark-content" />
        <Text>Hi!!!</Text>
        <TouchableOpacity style={styles.mainBtn}>
          <Text>Button1!!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  mainBtn: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: 'skyblue',
  },
});

export default App;
