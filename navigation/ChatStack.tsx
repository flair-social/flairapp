import {createStackNavigator} from "@react-navigation/stack";
import { Chatpage } from "../screens/Chat/Chatpage";

const Stack = createStackNavigator();


export function ChatStack() {

  return (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Chatpage" component={Chatpage}>
    </Stack.Screen>
  </Stack.Navigator>
  );
}
