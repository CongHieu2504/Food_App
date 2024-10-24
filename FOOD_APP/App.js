import * as React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Sửa lại từ @react-navigation/native
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home1 from './Home1'
import Home2 from "./Home2";
import Home3 from "./Home3"; 
import Home4 from "./Home4";
import Home5 from "./Home5";
import Home6 from "./Home6";
import Home7 from "./Home7";  
import Home8 from "./Home8";
import Home9 from "./Home9";
import Home10 from "./Home10";
import Home11 from "./Home11";
import Home12 from "./Home12";
import Home13 from "./Home13";
import Home14 from "./Home14";
import Home15 from "./Home15";
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
        <Stack.Screen name="Home7" component={Home7}/>
        <Stack.Screen name="Home8" component={Home8}/>
        <Stack.Screen name="Home9" component={Home9}/>
        <Stack.Screen name="Home10" component={Home10}/>
        <Stack.Screen name="Home11" component={Home11}/>
        <Stack.Screen name="Home12" component={Home12}/>
        <Stack.Screen name="Home13" component={Home13}/>
        <Stack.Screen name="Home14" component={Home14}/>
        <Stack.Screen name="Home15" component={Home15}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};
