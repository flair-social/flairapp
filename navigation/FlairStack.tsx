import { createStackNavigator } from "@react-navigation/stack";
import {FlairListScreen} from "../screens/flair/FlairListScreen";
import {Postpage1} from '../screens/Postpage/Postpage1';

const Stack = createStackNavigator();

export function FlairStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FlairListScreen" component={FlairListScreen} />
      <Stack.Screen name="PostPage" component={Postpage1} options={{ title: 'Post Page' }} />
    </Stack.Navigator>
  );
}
