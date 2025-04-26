import { View, Text } from "react-native";
import ProductItem from "../../components/ProductItem";
import productsGetir from "../../../assets/productsGetir";

const index = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        {productsGetir.slice(0, 2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
      <Text
        style={{
          color: "gray",
          fontWeight: "bold",
          padding: 14,
          alignItems: "center",
        }}
      >
        Çubuk
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          backgroundColor: "white",
          paddingVertical: 6,
        }}
      >
        {productsGetir.slice(2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default index;
