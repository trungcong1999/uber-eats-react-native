/*
 * Copyright (c) 2023 Hoàng Trung Công <https://github.com/trungcong1999>
 * 
 * Created Date: Tuesday, April 11th 2023, 5:01:32 pm
 * Author: Hoàng Trung Công
 * 
 */



import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function ViewCart() {
  return (
    <View style={{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        position:"absolute",
        bottom:130,
        zIndex:999,
    }}>
    <View style={{ flexDirection: "row", justifyContent: "center", width:"100%"}}>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "black",
          alignItems: "center",
          padding: 13,
          borderRadius: 30,
          width: 300,
          position: "relative",
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
        {/* <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    color: "white",
                    fontSize: 15,
                    top: 17,
                  }}
                >
                  {total ? totalUSD : ""}
                </Text> */}
      </TouchableOpacity>
    </View>
    </View>
  );
}
