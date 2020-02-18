import React, { Component } from "react";
import { View, StyleSheet, ScrollView, RefreshControl, Button, TouchableHighlightBase } from "react-native";
import { RNCamera } from 'react-native-camera';

class ScannerScreen extends Component {
  constructor(props) {
    super(props);
    this.camera = null;

    this.state = {
      isPopUp: false,
      barcodeCodesAvailable: [],
      barcodeCode: "",
      camera: {
        type: RNCamera.Constants.Type.back,
	      flashMode: RNCamera.Constants.FlashMode.auto,
      }
    };
  }

  AcceptRegister = () => {
    this.setState({isPopUp:false, barcodeCode: ""});
    console.log(this.state.isPopUp)
  }

  onBarCodeRead(scanResult) {
  if (scanResult.data != null) {
    this.setState({isPopUp: true, barcodeCode: scanResult.data});
  }
    return;
  }

  async takePicture() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  }

  render() {
   
    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            defaultTouchToFocus
            flashMode={this.state.camera.flashMode}
            mirrorImage={false}
            onBarCodeRead={this.onBarCodeRead.bind(this)}
            onFocusChanged={() => {}}
            onZoomChanged={() => {}}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
            style={styles.preview}
            type={this.state.camera.type}
        />
        <View style={[styles.overlay, styles.topOverlay]}>
	        <Text style={styles.scanScreenMessage}>Please scan the QRCode.</Text>
	      </View>
        {this.state.isPopUp ? (
        <View 
          style={{
            position: 'absolute',
            top: 100,
            width:100, height: 100, backgroundColor: 'red'}}>
            <Text style={{color:'blue'}}>{this.state.barcodeCode}</Text>
        </View>) : null }
	      <View style={[styles.overlay, styles.bottomOverlay]}>
          <Button
            onPress={() => this.AcceptRegister()}
            style={styles.enterBarcodeManualButton}
            title="Accept register"
           />
	</View>
      </View>
    );
  }
}

export default ScannerScreen;
const styles = {
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center'
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  enterBarcodeManualButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40
  },
  scanScreenMessage: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
};