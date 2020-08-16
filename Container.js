import * as React from 'react'
import { ScrollView, Platform } from 'react-native'

export default props => {
  const paddingHorizontal = props.paddingHorizontal || 20

  const styles = {
    scrollContainer: {
      flex: 1,
      paddingVertical: 35,
      paddingHorizontal: paddingHorizontal,
      backgroundColor: Platform.OS === 'ios'
        ? props.isDarkMode
          ? 'black'
          : '#F0F0F6'
        : props.isDarkMode
          ? '#212121'
          : 'white',
    },
  }

  return (
    <ScrollView contentContainerStyle={{...styles.scrollContainer}}>
      {props.children}
    </ScrollView>
  )
}