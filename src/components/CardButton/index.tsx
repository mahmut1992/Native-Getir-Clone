import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartActions";
import { Product } from "../../models";

const { width, height } = Dimensions.get("window");

type cartButtonType = {
  addItemToCart: (a: Product) => void;
  item: Product;
};

const index = ({ item, addItemToCart }: cartButtonType) => {
  return (
    <TouchableOpacity
      onPress={() => addItemToCart(item)}
      style={{
        width: "100%",
        height: height * 0.1,
        backgroundColor: "white",
        marginTop: 10,
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: height * 0.06,
          width: "90%",
          backgroundColor: "#5D39C1",
          marginHorizontal: "5%",
          borderRadius: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 15 }}>
          Sepete Ekle
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product: Product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),
  };
};

export default connect(null, mapDispatchToProps)(index);

const styles = StyleSheet.create({});
