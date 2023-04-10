/*
 * Copyright (c) 2023 trungcong1999 <https://github.com/trungcong1999>
 *
 * Created Date: Thursday, April 6th 2023, 10:20:55 pm
 * Author: trungcong1999
 *
 */

import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
// import {Divider} from 'react-native-elements'
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";

const YELP_API_KEY =
  "ZhTDIiwlRyTY2i5y8w05nyVRNZLYHNOCJ6XscZ10Wv9mdCN8Eke6J78QwSHA5ZafEPTC-TKTM8BSE3glFfttN2ttwraJL4D6wiEN0LRd4urCpUtGXej55K9xSeQzZHYx";
export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  const [city, setCity] = useState("Chicago");
  // const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurentsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData
        (
          json.businesses
          // .filter((business) =>
          //   business.transactions.includes(activeTab.toLowerCase())
          // )
        )
      );
  };
  useEffect(() => {
    getRestaurentsFromYelp();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData}/>
      </ScrollView>
      {/* <Divider /> */}
    </SafeAreaView>
  );
}
