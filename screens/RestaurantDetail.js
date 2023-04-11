/*
 * Copyright (c) 2023 Hoàng Trung Công <https://github.com/trungcong1999>
 * 
 * Created Date: Tuesday, April 11th 2023, 3:14:07 pm
 * Author: Hoàng Trung Công
 * 
 */

import { View, Text } from "react-native";
import React from "react";
import About from "../components/restaurantDetail/About";
import { Divider } from "react-native-elements/dist/divider/Divider";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

export default function RestaurantDetail({route, navigation}) {
  return (
    <View>
      <About route={route}/>
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name}/>
      <ViewCart navigation={navigation} restaurantName = {route.params.restaurantName}/>
    </View>
  );
}
