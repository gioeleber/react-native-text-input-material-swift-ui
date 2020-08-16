import * as React from 'react';
import { TextInput, View } from 'react-native';

export default props => {
  // consts
  const paddingHorizontal = props.paddingHorizontal || 20

  // styles
  const styles = {
    input: {
      paddingHorizontal,
      borderColor: props.isDarkMode? '#282828' : '#E4E4E4',
      backgroundColor: props.isDarkMode? '#1A1A1C' : 'white',
      paddingVertical: 10,
      borderTopWidth: props.isFirst? 1 : 0,
      borderBottomWidth: props.isLast? 1 : 0,
      fontSize: 15,
      fontFamily: props.fontFamily || 'System',
      
      marginHorizontal: - paddingHorizontal
    },
    dividerContainer: {
      backgroundColor: props.isDarkMode? '#1A1A1C' : '#FFF',
      marginHorizontal: - paddingHorizontal

    },
    divider: {
      alignItems: 'flex-end',
      width: '100%',
      height: props.isLast? 0 : 1,
      backgroundColor: props.isDarkMode? '#323232' : '#E4E4E4',
      marginLeft: paddingHorizontal,
      marginRight: -paddingHorizontal
    },
  }

  return (<>
    <TextInput
      {...props}
      placeholder={props.label}
      placeholderTextColor={
        props.isDarkMode? 'gray' : '#C3C3C3'
      }
      style={styles.input}
    />
    <View style={styles.dividerContainer}>
      <View style={styles.divider} />
    </View>
  </>)
}

