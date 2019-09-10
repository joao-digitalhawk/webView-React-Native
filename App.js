import React, { Component } from 'react';
import { Platform, PermissionsAndroid, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

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
          [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
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
        uri: 'https://gruhn.github.io/vue-qrcode-reader/demos/DecodeAll.html',
      }}
      style={{ marginTop: 20 }}
    />
    // )}
    // </>
  );
}
}
