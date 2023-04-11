/*
 * Copyright (c) 2023 Hoàng Trung Công <https://github.com/trungcong1999>
 * 
 * Created Date: Monday, April 10th 2023, 4:54:56 pm
 * Author: Hoàng Trung Công
 * 
 */

import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
    return (
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          marginHorizontal: 30,
          justifyContent: "space-between",
        }}
      >
        <Icon icon="home" text="Home" />
        <Icon icon="search" text="Browse" />
        <Icon icon="shopping-bag" text="Grocery" />
        <Icon icon="receipt" text="Orders" />
        <Icon icon="user" text="Account" />
      </View>
    );
  }
  
  const Icon = (props) => (
    <TouchableOpacity>
      <View>
        <FontAwesome5
          name={props.icon}
          size={25}
          style={{
            marginBottom: 3,
            alignSelf: "center",
          }}
        />
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );