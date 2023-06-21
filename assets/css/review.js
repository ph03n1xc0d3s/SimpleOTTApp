import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#ededed',
    flex: 1,
  },
  heading: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
  },
  coverPic: {
    width: 350,
    height: 500,
    marginBottom: '5%',
    borderRadius: 3,
  },
  movieDescription: {
    backgroundColor: '#32fd',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  castSection: {
    backgroundColor: '#32fd',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  castSectionHeading: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    paddingBottom: 10,
  },
  castName: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    padding: 5,
  },
  descriptionHeadingOne: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    paddingBottom: 10,
  },
});