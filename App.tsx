import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import { StyleSheet, Text, View } from "react-native";
import RouteNavigator from "./src/navigators/RouteNavigator";
import store from "./src/redux/store";
import { Provider } from "react-redux";

import { LogBox } from "react-native";

LogBox.ignoreAllLogs();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RouteNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
