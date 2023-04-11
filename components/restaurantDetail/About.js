/*
 * Copyright (c) 2023 trungcong1999 <https://github.com/trungcong1999>
 *
 * Created Date: Tuesday, April 11th 2023, 3:09:14 pm
 * Author: trungcong1999
 *
 */

import { View, Text, Image } from "react-native";
import React from "react";

const yelpRestaurantInfo = {
  name: "FarmHouse Kitchen Thai Cuisine",
  image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  price: "$$",
  reviews: "1500",
  rating: 4.5,
  categories: [
    { title: "Indian" },
    { title: "Comfort Food" },
    { title: "Coffee" },
    { title: "Ice Cream" },
    { title: "Snacks" },
  ],
};

const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;

const formattedCategories = categories.map((cat) => cat.title).join(" • ");

const description = `${formattedCategories} ${
  price ? " • " + price : ""
} • 🎫 • ${rating} ⭐ (${reviews}+)`;
export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurentName title={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);
const RestaurentName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);
const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
