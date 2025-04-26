import { View, StyleSheet } from "react-native";
import CategoryItem from "../CategoryItem";
import categoriesGetir from "../../../assets/categorieGetir";
import { useState } from "react";
import { Category } from "../../models";

const index = () => {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <View>
      <View style={styles.listContainer}>
        {categoriesGetir.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
});
export default index;
