import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Product } from "../../models";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartActions";
const { width, height } = Dimensions.get("window");

type CartItemProps = {
  product: Product;
  quantity: number;
  removeFromCart: (product: Product) => void;
  increaseQuantity: (payload: { product: Product; quantity: number }) => void;
};

const index = ({
  product,
  quantity,
  removeFromCart,
  increaseQuantity,
}: CartItemProps) => {
  return (
    <View style={{ width: "100%", backgroundColor: "white" }}>
      <View
        style={{
          width: width * 0.92,
          borderBottomWidth: 0.4,
          borderBottomColor: "lightgray",
          height: height * 0.13,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: width * 0.04,
          backgroundColor: "white",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{ uri: product.image }}
            style={{ width: height * 0.09, height: height * 0.09 }}
          />
          <View style={{ marginLeft: 8 }}>
            <Text
              style={{
                maxWidth: width * 0.38,
                fontSize: 13,
                fontWeight: "700",
              }}
            >
              {product.name}{" "}
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 3,
                color: "#848897",
                fontWeight: "700",
              }}
            >
              {product.miktar}{" "}
            </Text>
            <Text
              style={{ color: "#5D3EBD", fontWeight: "bold", marginTop: 6 }}
            >
              {" "}
              ₺{product.fiyat}{" "}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: width * 0.2,
            borderColor: "lightgray",
            borderWidth: 0.5,
            height: height * 0.04,
            alignItems: "center",
            borderRadius: 8,
          }}
        >
          <TouchableOpacity
            onPress={() => removeFromCart(product)}
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text>-</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#5D3EBD",
              height: height * 0.04,
              justifyContent: "center",
              shadowOpacity: 0.4,
              shadowRadius: 10,
              shadowColor: "gray",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 12 }}>
              {quantity}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => increaseQuantity({ product, quantity: 1 })}
            style={{ flex: 1, alignItems: "center" }}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product: Product) =>
      dispatch(actions.removeFromCart(product)),
    increaseQuantity: (payload) => dispatch(actions.increaseQuantity(payload)),
  };
};

export default connect(null, mapDispatchToProps)(index);

const styles = StyleSheet.create({});
