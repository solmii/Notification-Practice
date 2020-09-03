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
      // const status = remoteMessage.data.status;
      const followerName = remoteMessage.data.followerName;
      // if (status === 'change') {
      Alert.alert(
        'Check it out right now!',
        `The asset information of ${followerName} you are following has changed.`,
      );
      // }
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <StatusBar translucent barStyle="dark-content" />
        <Text style={styles.mainFont}>Hi!!!</Text>
        <TouchableOpacity style={styles.mainBtn}>
          <Text>Button!!</Text>
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
  mainFont: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'skyblue',
    textAlign: 'center',
  },
  mainBtn: {
    width: 200,
    padding: 14,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'skyblue',
  },
});

export default App;
