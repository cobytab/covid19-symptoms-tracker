import React, { useState } from 'react';

// UI
import { View, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native';

// Custom sytles
import { basic, home, login } from '../shared/styles';

const Home = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    let re = /^(233|0)[\d]{9}$/;
    return re.test(phone);
  };

  const handleSubmit = () => {
    if (email === '' || phone === '') {
      setMessage('Fill in all fields');
    } else if (!validateEmail(email)) {
      setMessage('Only valid email addresses are accepted');
    } else if (!validatePhone(phone)) {
      setMessage('Invalid phone number');
    } else {
      navigation.navigate('Home');
    }
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={[basic.container, home.view]}>
        <Text style={home.head}>COVID</Text>
        <View style={home.headView}>
          <View style={[home.headHyphen]} />
          <Text style={home.head}>19</Text>
        </View>

        <View style={home.mainInfo}>
          <Text style={[home.mainInfoText, { paddingBottom: 15 }]}>Welcome to the symptom tracker.</Text>
          <TextInput
            style={login.input}
            name="email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
            placeholder="Email Address"
            selectionColor="#fff"
            autoCapitalize="none"
            placeholderTextColor="white"
          />
          <TextInput
            style={login.input}
            name="phone"
            value={phone}
            onChangeText={(text) => setPhone(text)}
            keyboardType="number-pad"
            placeholder="Phone number"
            selectionColor="#fff"
            maxLength={12}
            autoCapitalize="none"
            placeholderTextColor="white"
          />
        </View>
        <View style={home.subInfo}>
          {message !== '' && <Text style={[home.subInfoText, { fontSize: 16, textAlign: 'center' }]}>{message}</Text>}
        </View>

        <View style={home.buttonView}>
          <TouchableOpacity style={[home.button, home.firstbtn]} onPress={handleSubmit}>
            <Text style={home.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Home;
