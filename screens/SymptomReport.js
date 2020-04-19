import React, { useState } from "react";

// UI
import { View, Text, TouchableOpacity } from "react-native";

// Custom sytles
import { basic, home, symptoms } from "../shared/styles";

const SymptomReport = ({ navigation, route }) => {
  const { index } = route.params;
  const data = [
    {
      title: "COVID-19 Test",
      question: "Have you had a test for COVID-19?",
      options: ["Yes", "No"],
    },
    {
      title: "COVID-19 Status",
      question: "Did you test positive for COVID-19?",
      options: ["Yes", "No"],
    },
    {
      title: "Do you have a fever?",
      question: "Are you currently experiencing a high temperature?",
      options: ["Yes", "No"],
    },
    {
      title: "Do you have a persistent cough?",
      question:
        "Coughing a lot for than an hour or 3 episodes in the past 24hrs?",
      options: ["Yes", "No"],
    },
    {
      title: "How do you feel right now?",
      question: "Try to let us know how you're feeling now.",
      options: ["Great", "Normal", "Not Good", "Awful"],
    },
  ];
  const currentData = data[index];
  const [currentOption, setCurrentOption] = useState();

  const Indicator = <></>;

  return (
    <View style={{ flex: 1 }}>
      <View style={[basic.container, symptoms.view]}>
        {index !== null && (
          <>
            <View style={home.mainInfo}>
              <Text style={[home.mainInfoText, symptoms.headText]}>
                {currentData.title}
              </Text>
            </View>

            <View style={home.subInfo}>
              <Text style={home.subInfoText}>{currentData.question}</Text>
            </View>

            <View style={home.buttonView}>
              {currentData.options.map((option, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => alert("Send a Daily Update")}
                    style={home.button}
                  >
                    <Text style={[home.buttonText, symptoms.regularbtnText]}>
                      {option}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </>
        )}
      </View>
      <View style={symptoms.indicatorView}>
        {data.map((item, id) => {
          if (id === index) {
            return <View style={[symptoms.indicator, symptoms.indicatorActive]} />;
          }

          return <View style={[symptoms.indicator]} />;
        })}
      </View>
    </View>
  );
};

export default SymptomReport;
