import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import categorieGetir from "../../../assets/categorieGetir";
import { useState } from "react";
import { Category } from "../../models";

const { height, width } = Dimensions.get("window");
const CategoryBox = ({
  item,
  active,
}: {
  item: Category;
  active: Category;
}) => {
  return (
    <View
      style={[
        {
          paddingHorizontal: 9,
          flexDirection: "row",
          alignItems: "center",
        },
        item.name == active.name && {
          borderBottomColor: "#FFD00C",
          borderBottomWidth: 2.5,
        },
      ]}
    >
      <Text style={{ fontSize: 14, fontWeight: "bold", color: "white" }}>
        {item.name}
      </Text>
    </View>
  );
};
const index = ({ category }: { category: Category }) => {
  const [categories, setCategories] = useState<Category[]>(categorieGetir);
  return (
    <ScrollView
      style={{
        width: "100%",
        backgroundColor: "#7849F7",
        height: height * 0.065,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {categories.map((item) => (
        <CategoryBox item={item} key={item.id} active={category} />
      ))}
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
