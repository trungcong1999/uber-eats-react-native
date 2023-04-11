/*
 * Copyright (c) 2023 trungcong1999 <https://github.com/trungcong1999>
 *
 * Created Date: Tuesday, April 11th 2023, 3:14:07 pm
 * Author: trungcong1999
 *
 */

import { View, Text } from "react-native";
import React from "react";
import About from "../components/restaurantDetail/About";
import { Divider } from "react-native-elements/dist/divider/Divider";
import MenuItems from "../components/restaurantDetail/MenuItems";

export default function RestaurantDetail({route}) {
  return (
    <View>
      <About route={route}/>
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems/>
    </View>
  );
}
