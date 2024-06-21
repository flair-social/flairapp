import { createStackNavigator } from "@react-navigation/stack";
import { ProfileOverviewScreen } from "../screens/profile/ProfileOverviewScreen";
import { PostStack } from '../navigation/PostStack';

const Stack = createStackNavigator();

export function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileOverviewScreen" component={ProfileOverviewScreen} />
      <Stack.Screen name="PostStack" component={PostStack} options={{ title: 'Post Page' }} />
    </Stack.Navigator>
  );
}
