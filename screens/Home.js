import React, {useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {MovieData} from '../constants/MovieData';

const Home = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const [movies, setMovie] = useState(MovieData);

  return (
    <View style={style.container}>
      <FlatList
        numColumns={2}
        data={movies}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Review', item)}>
              <Image source={item.image} style={style.coverPic} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    height: '100%',
  },
  heading: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
  },
  coverPic: {
    width: 190,
    height: 250,
    padding: '25%',
    marginTop: '5%',
  },
});

export default Home;
