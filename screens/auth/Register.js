import React, {useState, useLayoutEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import {style} from '../../assets/css/register';
// import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';
import {registerValidation} from './Validation';

const Register = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const [isSelected, setSelection] = useState(false);

  const handleCheckbox = () => setSelection(!isSelected);

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const createUser = async userValues => {
    const data = {
      name: userValues.name,
      email: userValues.email,
      password: userValues.password,
    };
    try {
      await fetch('http://10.0.2.2:5233/registerUser', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      })
        .then(response => {
          if (response.status == '200') {
            navigation.navigate('Login');
            Alert.alert('Account Created!', 'We hope you enjoy our app', [
              {text: 'Continue'},
            ]);
          } else {
            Alert.alert('OOPS!', 'Something went wrong', [{text: 'Try again'}]);
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
          <Text style={style.loginText}>Register Now !</Text>
          <Formik
            initialValues={{name: '', email: '', password: ''}}
            validationSchema={registerValidation}
            onSubmit={values => createUser(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => {
              return (
                <>
                  <View style={style.name}>
                    <Text style={style.inputLable}>Name</Text>
                    <TextInput
                      name="name"
                      style={style.inputStyle}
                      placeholder="John Doe"
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                    />
                    {errors.name && (
                      <Text style={{fontSize: 10, color: 'red'}}>
                        {errors.name}
                      </Text>
                    )}
                  </View>
                  <View style={style.email}>
                    <Text style={style.inputLable}>Email</Text>
                    <TextInput
                      name="email"
                      style={style.inputStyle}
                      placeholder="john@example.com"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                    {errors.email && (
                      <Text style={{fontSize: 10, color: 'red'}}>
                        {errors.email}
                      </Text>
                    )}
                  </View>
                  <View style={style.password}>
                    <Text style={style.inputLable}>Password</Text>
                    <TextInput
                      name="password"
                      style={style.inputStyle}
                      placeholder="Enter password"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      secureTextEntry={true}
                    />
                    {errors.password && (
                      <Text style={{fontSize: 10, color: 'red'}}>
                        {errors.password}
                      </Text>
                    )}
                  </View>
                  <View style={style.termsContainer}>
                    {/* <CheckBox
                      value={isSelected}
                      onValueChange={handleCheckbox}
                      tintColor={{true: 'yellow', false: 'red'}}
                    /> */}
                    <Text>
                      I agree to term and conditions
                    </Text>
                  </View>
                  <View style={style.registerButtonContainer}>
                    <TouchableOpacity
                      onPress={handleSubmit}
                      disabled={!isSelected || !isValid}
                      style={{
                        backgroundColor:
                          isSelected && isValid ? '#34fd' : 'gray',
                        borderRadius: 8,
                      }}>
                      <Text style={style.registerButton}>Create account</Text>
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

export default Register;
