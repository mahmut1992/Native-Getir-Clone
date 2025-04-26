import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";

const index = () => {
  const [details, setDetails] = useState<string[]>([
    "Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti",
    "İçindekiler",
    "Besin değerleri",
    "Kulalnım",
    "Ek Bilgiler",
  ]);

  const TextComponent = ({
    detail,
    index,
  }: {
    detail: string;
    index: number;
  }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 12,
          borderBottomWidth: index === details.length - 1 ? 0 : 0.4,
          borderBottomColor: "lightgray",
        }}
      >
        <Text
          style={{
            color: index === 0 ? "black" : "#687482",
            fontSize: index === 0 ? 11 : 13,
            fontWeight: index === 0 ? "400" : "500",
          }}
        >
          {detail}{" "}
        </Text>
        {index != 0 && (
          <Feather name="chevron-down" size={24} color="#9f9f9f" />
        )}
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        paddingHorizontal: 11,
        paddingVertical: 8,
      }}
    >
      {details.map((item, index) => (
        <TextComponent key={index} detail={item} index={index} />
      ))}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
