import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Splash from './Screens/Splash'
import Login from './Screens/Login'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// const App = () => (
//   <View style={styles.container}>
//     <Splash/>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
  // image: {
  //   flex: 1,
  //   justifyContent: "center"
  // },
  // text: {
  //   color: "white",
  //   fontSize: 42,
  //   lineHeight: 84,
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   backgroundColor: "#000000c0"
  // }
// });

// export default App;