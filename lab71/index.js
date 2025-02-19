import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AlbumScreen from "./AlbumScreen";
import ProductScreen from "./ProductScreen";

const Tab = createBottomTabNavigator();

const Lab71 = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Album" component={AlbumScreen} />
        <Tab.Screen name="Product" component={ProductScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Lab71;
