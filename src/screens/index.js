import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {images, icons, colors} from '../constants';

function Screens() {
  return (
    <View style={[styles.container]}>
      <Image
        source={icons.icHeart}
        resizeMode="cover"
        style={styles.iconHeart}
      />
      <Text>WELCOME TO SMART CHAT</Text>
    </View>
  );
}

export default Screens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.while,
  },
  iconHeart: {
    height: 44,
    width: 44,
    borderColor: colors.black,
    borderWidth: 3,
  },
});
