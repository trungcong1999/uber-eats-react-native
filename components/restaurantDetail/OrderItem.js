/*
 * Copyright (c) 2023 Hoàng Trung Công <https://github.com/trungcong1999>
 * 
 * Created Date: Tuesday, April 11th 2023, 5:09:48 pm
 * Author: Hoàng Trung Công
 * 
 */

import { View, Text } from "react-native";
import React from "react";

export default function OrderItem({ item }) {
  const { title, price } = item;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 16 }}>{title}</Text>
      <Text style={{ opacity: 0.7, fontSize: 16 }}>{price}</Text>
    </View>
  );
}
