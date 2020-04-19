import React, { useState } from "react";

// UI
import { View, Text, TouchableOpacity } from "react-native";

// Custom sytles
import { basic, home } from "../shared/styles";

const Home = ({navigation}) => {
  return (
    <View style={[basic.container, home.view]}>
      <Text style={home.head}>COVID</Text>
      <View style={home.headView}>
        <View style={[home.headHyphen]} />
        <Text style={home.head}>19</Text>
      </View>

      <View style={home.mainInfo}>
          <Text style={home.mainInfoText}>Self report daily.</Text>
          <Text style={home.mainInfoText}>Slow the outbreak.</Text>
          <Text style={home.mainInfoText}>Identify risk.</Text>
      </View>

      <View style={home.subInfo}>
          <Text style={home.subInfoText}>Thank you for contributing</Text>
      </View>

      <View style={home.buttonView}>
          <TouchableOpacity style={[home.button, home.firstbtn]} onPress={() => navigation.navigate("SymptomReport", {index: 0})}>
              <Text style={home.buttonText}>Report Symptoms</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("Send a Daily Update")} style={home.button}>
              <Text style={home.buttonText}>Send a Daily Update</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
