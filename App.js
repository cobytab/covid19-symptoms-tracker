import * as React from "react";

// React navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

// Root stack
import Root from "./navigators/root";

export default function App() {
  return <Root />;
}
