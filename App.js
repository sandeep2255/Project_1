import react from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./components/Home"
import male from "./components/male"
import female from "./components/female";

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          />
        <Stack.Screen name="male" component={male}/>
        <Stack.Screen name="female" component={female}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default MyStack