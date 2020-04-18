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
          headerTintColor: colors.dark,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SymptomReport" component={SymptomReport} />
        <Stack.Screen name="Thanks" component={Thanks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
