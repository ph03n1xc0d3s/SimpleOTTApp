import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  mainContainer: {
    height: '100%',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 100,
    backgroundColor: '#ededed',
  },
  container: {
    padding: 20,
    borderRadius: 10,
    height: '70%',
  },
  loginText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 34,
    color: '#000',
    textAlign: 'center',
    paddingVertical: 15,
  },
  email: {
    paddingVertical: 15,
  },
  password: {
    paddingVertical: 5,
  },
  inputLable: {
    paddingVertical: 5,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    color: '#000',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10,
    borderRadius: 5,
    paddingVertical: 10,
  },
  loginButtonContainer: {
    paddingVertical: 25,
  },
  loginButton: {
    color: '#fff',
    padding: 8,
    textAlign: 'center',
    fontSize: 18,
  },
  loginOption: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    color: '#000',
  },
  googleButton: {
    backgroundColor: '#dedede',
    color: '#000',
    textAlign: 'center',
    borderRadius: 8,
    fontSize: 16,
    width: '60%',
    padding: 8,
  },
  registerButton: {
    backgroundColor: '#dedede',
    color: '#000',
    textAlign: 'center',
    borderRadius: 8,
    fontSize: 16,
    width: '60%',
    padding: 8,
    margin: 15,
  },
  registerIcon: {
    color: '#34df',
  },
});
