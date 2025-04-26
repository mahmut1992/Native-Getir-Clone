import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const TypeBox = ({
  setCategory,
  item,
  active,
}: {
  item: string;
  active: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setCategory(item)}
      style={[
        {
          paddingHorizontal: 10,
          height: height * 0.064,
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 6,
          height: height * 0.044,
          marginRight: 10,
        },
        item == active
          ? { backgroundColor: "#5C3EBC" }
          : { borderColor: "lightgray", borderWidth: 0.2, marginLeft: 3 },
      ]}
    >
      <Text
        style={[
          { fontSize: 12, color: "#7849F7", fontWeight: "bold" },
          item == active && { color: "white" },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const index = () => {
  const [category, setCategory] = useState<String>("Birlikte İyi Gider");

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
      style={{
        width: "100%",
        backgroundColor: "white",
        height: height * 0.07,
        flexDirection: "row",
        paddingVertical: height * 0.014,
        paddingHorizontal: 12,
      }}
    >
      {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map(
        (item) => (
          <TypeBox setCategory={setCategory} item={item} active={category} />
        )
      )}
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
