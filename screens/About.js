import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const About = () => {
  return (
    <View style={style.container}>
      <Text style={style.heading}>About Screen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 24,
  },
  heading: {
    fontSize: 24,
    color: "#000"
  }
});

export default About;
