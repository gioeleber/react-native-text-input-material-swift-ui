import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Animated } from 'react-native';

// props: value, defaultValue, label, tintColor

export default props => {
  // consts
  const tintColor = props.tintColor || 'black'

  // state
  const [ isFocused, setIsFocused ] = useState(false)
  
  // references
  const animatedIsFocused = useRef(new Animated.Value(
    props.value !== '' || props.value || props.defaultValue? 1 : 0)
  ).current

  // funcs
  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || props.value || props.defaultValue ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, props.value])

  // styles
  const styles = {
    label: {
      fontFamily: props.fontFamily || 'System',
      position: 'absolute',
      left: 0,
      top: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [props.multiline? 28 : 22, 4],
      }),
      fontSize: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 13],
      }),
      color: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['gray', tintColor],
      }),
    },
    input: {
      fontFamily: props.fontFamily || 'System',
      height: props.multiline? 40 : 33,
      color: props.isDarkMode? '#FFF' : '#000',
      paddingBottom: 6,
      fontSize: 16,
      borderBottomWidth: 3,
      borderBottomColor: props.isDarkMode? 'dimgray' : '#D8D8D8',
      width: '100%'
    },
    inputBorder: {
      marginTop: -3,
      marginHorizontal: 'auto',
      width: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
      }),
      height: 3,
      backgroundColor: tintColor,
    },
    container: {
      paddingBottom: 14, 
      paddingTop: 16,
    }
  }

  return (
    <View style={styles.container}>
      <Animated.Text style={styles.label}>
        {props.label}
      </Animated.Text>
      <TextInput
        {...props}
        style={styles.input}
        onFocus={() => {setIsFocused(true)}}
        onBlur={() => {setIsFocused(false)}}
      />
      <Animated.View style={styles.inputBorder} />
    </View>
  );
}