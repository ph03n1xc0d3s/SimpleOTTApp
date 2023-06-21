import React, {useLayoutEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {Alert} from 'react-native';
import {Formik} from 'formik';
import {style} from '../../assets/css/login';
import {loginValidation} from './Validation';

const Login = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const loginUser = async loginValues => {
    const data = {
      email: loginValues.email,
      password: loginValues.password,
    };
    try {
      await fetch('http://10.0.2.2:5233/login', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      })
        .then(response => {
          if (response.status == '200') {
            navigation.navigate('Home');
            Alert.alert('Welcome Back', "It's good to see you again", [
              {text: 'Continue'},
            ]);
          } else {
            Alert.alert('OOPS!', 'Password is incorrect', [{text: 'OK'}]);
          }
        })
        .catch(error => error);
    } catch (error) {
      return error;
    }
  };

  return (
    <View style={style.mainContainer}>
      <View style={style.container}>
        <Text style={style.loginText}>Login to continue</Text>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => loginUser(values)}
          validationSchema={loginValidation}>
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            values,
            errors,
            isValid,
          }) => {
            return (
              <>
                <View style={style.email}>
                  <Text style={style.inputLable}>Email</Text>
                  <TextInput
                    style={style.inputStyle}
                    placeholder="john@example.com"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {errors.email && (
                    <Text style={{fontSize: 12, color: 'red'}}>
                      {errors.email}
                    </Text>
                  )}
                </View>
                <View style={style.password}>
                  <Text style={style.inputLable}>Password</Text>
                  <TextInput
                    style={style.inputStyle}
                    placeholder="Enter password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={true}
                  />
                  {errors.password && (
                    <Text style={{fontSize: 12, color: 'red'}}>
                      {errors.password}
                    </Text>
                  )}
                </View>
                <View style={style.loginButtonContainer}>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    disabled={!isValid}
                    style={{
                      backgroundColor: isValid ? '#34fd' : 'gray',
                      borderRadius: 8,
                    }}>
                    <Text style={style.loginButton}>Login</Text>
                  </TouchableOpacity>
                  <Text style={style.loginOption}>Or</Text>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <Text style={style.googleButton}>
                      <Image
                        source={{
                          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png',
                        }}
                        style={{height: 20, width: 20}}
                      />{' '}
                      Login with google
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
                    style={{alignItems: 'center'}}>
                    <Text style={style.registerButton}>
                      <Icon
                        name="account-arrow-right"
                        size={24}
                        style={style.registerIcon}
                      />{' '}
                      Register Now
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            );
          }}
        </Formik>
      </View>
    </View>
  );
};

export default Login;
