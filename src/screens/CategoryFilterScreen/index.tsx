import { StyleSheet, Text, View } from "react-native";
import CategoryFiltering from "../../components/CategoryFiltering";
import TypeFiltering from "../../components/TypeFiltering";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import { Category } from "../../models";
import ProductsContainer from "../../components/ProductsContainer";

const index = (props) => {
  const [category, setCategory] = useState<Category>(
    props.route.params.category
  );
  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />
      <ProductsContainer />
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
