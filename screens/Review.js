import React, {useLayoutEffect} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {style} from '../assets/css/review';

const Review = ({navigation, route}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const stateData = route?.params;

  return (
    <ScrollView>
      <View style={style.container}>
        <Image source={stateData.image} style={style.coverPic} />
        <View style={style.movieDescription}>
          <Text style={style.descriptionHeadingOne}>About Movie</Text>
          <Text style={style.heading}>Name: {stateData.title}</Text>
          <Text style={style.heading}>
            Release Year: {stateData.releaseYear}
          </Text>
          <Text style={style.heading}>Rating: {stateData.rating}</Text>
        </View>

        <View style={style.castSection}>
          <Text style={style.castSectionHeading}>Cast</Text>
          <FlatList
            data={stateData?.cast}
            renderItem={({item, index}) => {
              return (
                <Text style={style.castName}>
                  {index + 1}.) {item.name}
                </Text>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Review;
