import React from "react";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Login from "../screens/Login";
import Home from "../screens/Home";
import Thanks from "../screens/Thanks";
import SymptomReport from "../screens/SymptomReport";

// Custom Styles
import { colors } from "../shared/styles";

const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.light,
            elevation: 0,
          },
          headerTitle: "Report Symptoms",
          headerTintColor: colors.dark,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "600",
          },
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="SymptomReport"
          component={SymptomReport}
          initialParams={{ index: 0 }}
        />
        <Stack.Screen
          name="SymptomReport1"
          component={SymptomReport}
          initialParams={{ index: 1 }}
        />
        <Stack.Screen
          name="SymptomReport2"
          component={SymptomReport}
          initialParams={{ index: 2 }}
        />
        <Stack.Screen
          name="SymptomReport3"
          component={SymptomReport}
          initialParams={{ index: 3 }}
        />
        <Stack.Screen
          name="SymptomReport4"
          component={SymptomReport}
          initialParams={{ index: 4 }}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Thanks"
          component={Thanks}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
