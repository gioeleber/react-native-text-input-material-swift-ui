import * as React from 'react'
import { Platform, Text } from 'react-native'

export default props => {
  const styles = {
    label: {
      textTransform: Platform.OS === 'ios'?'uppercase': 'none',
      fontSize: Platform.OS === 'ios'? 13 : 17,
      color: Platform.OS === 'ios'
        ? props.isDarkMode? '#78787D' : '#6B6B70'
        : props.isDarkMode? '#FFFFFF' : '#212121',
      marginBottom: 8,
      fontFamily: props.fontFamily || 'System',
      marginTop: props.isTop? 0 : 30
    }
  }

  return (
    <Text style={{...styles.label, ...props.style}} {...props}>
      {props.children}
    </Text>
  )
}
