import * as React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Sửa lại từ @react-navigation/native
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home1 from './Home1'
import Home2 from "./Home2";
import Home3 from "./Home3"; 
import Home4 from "./Home4";
import Home5 from "./Home5";
import Home6 from "./Home6";

const Stack = createNativeStackNavigator();

export default function YourApp () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home1" component={Home1}/>
        <Stack.Screen name="Home2" component={Home2}/>
        <Stack.Screen name="Home3" component={Home3}/>
        <Stack.Screen name="Home4" component={Home4}/>
        <Stack.Screen name="Home5" component={Home5}/>
        <Stack.Screen name="Home6" component={Home6}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};
