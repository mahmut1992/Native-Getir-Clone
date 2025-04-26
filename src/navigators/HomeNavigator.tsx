import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
import Foundation from "@expo/vector-icons/Foundation";
import CartScreen from "../screens/CartScreen";
import { connect } from "react-redux";
import { Product } from "../models";
import { useEffect, useState } from "react";
import * as actions from "../redux/actions/cartActions";

const Stack = createStackNavigator();
const { width, height } = Dimensions.get("window");
const HomeNavigator = ({
  cartItems,
  clearCart,
}: {
  cartItems: { product: Product; quantity: 1 }[];
  clearCart: () => void;
}) => {
  const navigation = useNavigation();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const getProductPrice = () => {
    var total = 0;
    cartItems.forEach((cartItem) => {
      total += cartItem.product.fiyat * cartItem.quantity;
    });
    setTotalPrice(total);
  };
  useEffect(() => {
    getProductPrice();
  }, [cartItems]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Image
              style={{ width: 70, height: 30 }}
              source={require("../../assets/getirlogo.png")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: "white",
          headerBackTitle: "",
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 16, color: "white" }}>
              Ürünler
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Ana Sayfa", { screen: "CartScreen" })
              }
              style={{
                width: width * 0.21,
                height: 33,
                backgroundColor: "white",
                marginRight: width * 0.03,
                borderRadius: 9,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 23, height: 23, marginLeft: 6 }}
                source={require("../../assets/cart.png")}
              />
              <View
                style={{
                  flex: 1,
                  height: 33,
                  borderTopRightRadius: 9,
                  backgroundColor: "#F3EFFE",
                  borderBottomRightRadius: 9,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "#5D3EBD", fontWeight: "bold", fontSize: 12 }}
                >
                  ₺{totalPrice.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerTintColor: "white",
          headerBackTitle: "",

          headerStyle: { backgroundColor: "#5C3EBC" },
          headerLeft: () => (
            <TouchableOpacity>
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 16, color: "white" }}>
              Ürün Detayı
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 12 }}>
              <Foundation name="heart" size={24} color="#32177a" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerBackTitle: "",
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Sepetim
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => clearCart()}
              style={{ paddingRight: 10 }}
            >
              <Ionicons name="trash" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(HomeNavigator);

const styles = StyleSheet.create({});
