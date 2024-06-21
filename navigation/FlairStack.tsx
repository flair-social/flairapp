import { createStackNavigator } from "@react-navigation/stack";
import { FlairListScreen } from "../screens/flair/FlairListScreen";
import { PostStack } from '../navigation/PostStack';

const Stack = createStackNavigator();

export function FlairStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FlairListScreen" component={FlairListScreen} />
      <Stack.Screen name="PostStack" component={PostStack} options={{ title: 'Post Page' }} />
    </Stack.Navigator>
  );
}
