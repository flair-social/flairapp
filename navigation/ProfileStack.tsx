import {createStackNavigator} from "@react-navigation/stack";
import {ProfileOverviewScreen} from "../screens/profile/ProfileOverviewScreen";

export function ProfileStack() {
  const Stack = createStackNavigator();

  return <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="ProfileOverviewScreen" component={ProfileOverviewScreen}>
    </Stack.Screen>
  </Stack.Navigator>
}
