import React, { Component } from 'react';
import { Platform, PermissionsAndroid, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import RNRestart from 'react-native-restart';

export default class MyWeb extends Component {
  constructor() {
    super();
    this.onOpneScanner();
    state = {
      showWebView: false
    }
  }

  onOpneScanner() {
    if (Platform.OS === 'android') {
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            // {
            //   title: 'Permissão de câmera',
            //   message: 'O aplicativo precisa de acesso à sua câmra',
            // },
          );

          // verifica se o permissão foi concedida
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            this.setState({ showWebView: true })
          } else {
            Alert.alert(
              'Permissão da câmera negada!',
              'O app requer acesso a câmera para correto funcionamento.',
            );
          }
        } catch (err) {
        console.log('err', err)
        Alert.alert(
          'Permissão da câmera negada!',
          'Hove um erro na permissão da câmera, por favor reinicie o app.',
          // [
          //   // {text: 'OK', onPress: RNRestart.Restart()},
          // ],
        );
        console.warn(err);
      }
    }
    //Calling the camera permission function
    requestCameraPermission();
  }
}

render() {
  return (
    // <>
    // {this.showWebView && (
    <WebView
      source={{
        uri: 'https://pt-br.facebook.com/',
      }}
      style={{ marginTop: 20 }}
    />
    // )}
    // </>
  );
}
}
