import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  mainContainer: {
    height: '100%',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 100,
    backgroundColor: '#efefef',
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
  name: {
    paddingVertical: 5,
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
  registerButtonContainer: {
    paddingVertical: 15,
  },
  registerButton: {
    color: '#fff',
    padding: 8,
    textAlign: 'center',
    borderRadius: 8,
    fontSize: 18,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
});
