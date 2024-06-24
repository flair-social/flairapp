import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import { Chatpage } from "../screens/Chat/Chatpage";
import { Chat } from "../screens/Chat/Chat";

const Stack = createStackNavigator();


export function ChatStack() {

  return (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Chatpage" component={Chatpage}/>
    <Stack.Screen name="Chat" component={Chat} options={{ title: 'Chat page' }} />
  </Stack.Navigator>
  );
}
