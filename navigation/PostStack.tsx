import { createStackNavigator } from "@react-navigation/stack";
import {Postpage1} from "../screens/Postpage/Postpage1";
import {Modifypostpage} from "../screens/Postpage/Modifypostpage";

const Stack = createStackNavigator();

export function PostStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Postpage" component={Postpage1} />
      <Stack.Screen name="Modifypostpage" component={Modifypostpage} options = {{title : 'Modify Postpage'}}/>
    </Stack.Navigator>
  );
}
