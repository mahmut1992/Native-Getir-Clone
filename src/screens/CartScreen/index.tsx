import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import productsGetir from "../../../assets/productsGetir";
import CartItem from "../../components/CartItem";
import { ScrollView } from "react-native-gesture-handler";
import ProductItem from "../../components/ProductItem";
import { connect } from "react-redux";
import { Product } from "../../models";
import { useEffect, useState } from "react";

const { width, height } = Dimensions.get("window");

const index = ({
  cartItems,
}: {
  cartItems: { product: Product; quantity: number }[];
}) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const getProductPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.fiyat * item.quantity;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    getProductPrice();
  }, [cartItems]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <CartItem product={item.product} quantity={item.quantity} />
        )}
      />
      <Text style={{ padding: 10, fontWeight: "bold", color: "#5E3EBD" }}>
        Önerilen ürünler
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={true}
      >
        {productsGetir.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </ScrollView>
      <View
        style={{
          height: height * 0.12,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "4%",
        }}
      >
        <TouchableOpacity
          style={{
            height: height * 0.06,
            flex: 2.5,
            backgroundColor: "#5d3Ebd",
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fefefe",
            alignItems: "center",
            justifyContent: "center",
            height: height * 0.06,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <Text style={{ color: "#5D3E8D", fontWeight: "bold", fontSize: 16 }}>
            ₺{totalPrice.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps, null)(index);

const styles = StyleSheet.create({});
