import {createStackNavigator} from "@react-navigation/stack";
import {ProfileOverviewScreen} from "../screens/profile/ProfileOverviewScreen";
import {Postpage1} from '../screens/Postpage/Postpage1';


export function ProfileStack() {
  const Stack = createStackNavigator();

  return <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="ProfileOverviewScreen" component={ProfileOverviewScreen}>
    </Stack.Screen>
    <Stack.Screen name = "PostPage" component={Postpage1} options = {{ title: 'Post Page'}}/>
  </Stack.Navigator>
}
