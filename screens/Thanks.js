import React from "react";

// UI
import { View, Text, TouchableOpacity, Share } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Custom sytles
import { basic, home } from "../shared/styles";

const Thanks = ({ navigation }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Download the Covid-19 Symptom Tracker App",
      });
      if (result.action === Share.sharedAction) {
        console.log("Shared");
      } else if (result.action === Share.dismissedAction) {
        console.log("Dismissed");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={[basic.container, home.view]}>
      <MaterialCommunityIcons
        style={[home.head, home.heart]}
        name="heart-multiple-outline"
      />

      <View style={home.mainInfo}>
        <Text style={home.mainInfoText}>
          Thank you for your help and vital contribution to the study of
          COVID-19.
        </Text>
      </View>

      <View style={home.subInfo}>
        <Text style={home.subInfoText}>
          We would appreciate it if you could check back in tomorrow. Knowing
          people are healthy is extremely helpful.
        </Text>
      </View>

      <View style={home.buttonView}>
        <TouchableOpacity
          style={[home.button, home.firstbtn]}
          onPress={onShare}
        >
          <Text style={home.buttonText}>Share This App</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={home.button}
        >
          <Text style={home.buttonText}>Go back Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Thanks;
