import {createStackNavigator} from "@react-navigation/stack";

export function MapStack() {
  const Stack = createStackNavigator();

  return <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="MapMainScreen">
      {() => <></>}
    </Stack.Screen>
  </Stack.Navigator>
}
