import React, { PropTypes } from 'react'
import {
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Platform,
} from 'react-native'

function TouchableIOS(props) {
  return (
    <TouchableWithoutFeedback {...props} />
  )
}

TouchableAndroid.propTypes = {
  onPress: PropTypes.func,
  rippleColor: PropTypes.string,
  pause: PropTypes.number,
}

function TouchableAndroid(props) {
  return (
    <TouchableNativeFeedback
      {...props}
      background={props.rippleColor && Platform.Version >= 21 ?
        TouchableNativeFeedback.Ripple(props.rippleColor, false)
        : undefined}
      onPress={() => setTimeout(props.onPress, props.pause === undefined ? 250 : props.pause)}
    />
  )
}

const Touchable = Platform.OS === 'android'
  ? TouchableAndroid
  : TouchableIOS

module.exports = Touchable
