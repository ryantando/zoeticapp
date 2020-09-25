import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {TextBody} from './texts';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 20,
    position: 'absolute',
    bottom: 10,
    right: 20,
    height: width * 0.22,
    width: width * 0.22,
    borderRadius: width * 0.11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    height: width * 0.19,
    width: width * 0.19,
    borderRadius: width * 0.095,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignCenter: {textAlign: 'center'},
});

const MeasureButton = (props) => (
  <LinearGradient
    colors={['#CF2F6E', '#392C61', '#2098AA']}
    style={styles.container}>
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.view}>
        <TextBody style={styles.alignCenter} bold size="small">
          MEASURE NOW
        </TextBody>
      </View>
    </TouchableOpacity>
  </LinearGradient>
);

export default MeasureButton;
