import { StyleSheet, Text, View } from "react-native";
import React from "react";

type DetailBoxPorops = {
  price: number;
  name: string;
  quantity: string;
};

const index = ({ price, name, quantity }: DetailBoxPorops) => {
  return (
    <View
      style={{ width: "100%", alignItems: "center", backgroundColor: "white" }}
    >
      <Text
        style={{
          color: "#5D3EBD",
          fontWeight: "bold",
          marginTop: 12,
          fontSize: 20,
        }}
      >
        <Text>₺</Text> {price}
      </Text>
      <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 12 }}>
        {name}
      </Text>
      <Text
        style={{
          color: "#848897",
          fontWeight: "700",
          marginTop: 8,
          paddingBottom: 18,
        }}
      >
        {quantity}
      </Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
