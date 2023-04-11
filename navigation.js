/*
 * Copyright (c) 2023 trungcong1999 <https://github.com/trungcong1999>
 *
 * Created Date: Tuesday, April 11th 2023, 4:19:53 pm
 * Author: trungcong1999
 *
 */

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";

export default function RootNavigation() {
    const Stack = createStackNavigator();
  
    const screenOptions = {
      headerShown: false,
    };
  
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
            {/* <Stack.Screen name="OrderCompleted" component={OrderCompleted} /> */}
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
