import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { Product } from "../../models";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartActions";

const { width, height } = Dimensions.get("window");

type productItemtypes = {
  item: Product;
  addItemToCart: (a: Product) => void;
};

const index = ({ item, addItemToCart }: productItemtypes) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
      style={{
        width: width * 0.28,
        marginTop: 12,
        height: height * 0.23,
        marginLeft: 12,
        marginBottom: 6,
      }}
    >
      <Image
        style={{
          width: width * 0.28,
          height: width * 0.28,
          borderRadius: 12,
          borderWidth: 0.2,
          borderColor: "gray",
        }}
        source={{
          uri: item.image,
        }}
      />

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text
          style={{
            fontSize: 12,
            color: "#747990",
            textDecorationLine: "line-through",
            alignItems: "center",
          }}
        >
          <Text>₺</Text>
          {item.fiyat}
        </Text>
        <Text
          style={{
            color: "5D3EBD",
            fontWeight: "bold",
            fontSize: 12,
            marginLeft: 4,
          }}
        >
          <Text>₺</Text>
          {item.fiyatIndirimli}
        </Text>
      </View>
      <Text style={{ fontSize: 12, marginTop: 5, fontWeight: "600" }}>
        {item.name}
      </Text>
      <Text
        style={{
          color: "#747990",
          fontSize: 12,
          marginTop: 4,
          fontWeight: "600",
        }}
      >
        {item.miktar}
      </Text>
      <TouchableOpacity
        onPress={() => {
          addItemToCart(item);
        }}
        style={{
          width: 30,
          height: 30,
          borderWidth: 0.3,
          borderColor: "lightgray",
          backgroundColor: "white",
          position: "absolute",
          right: -6,
          top: -6,
          borderRadius: 6,
          alignItems: "center",
          justifyContent: "center",
          shadowRadius: 3.8,
          shadowOpacity: 0.05,
        }}
      >
        <Entypo name="plus" size={22} color="#5D3EBD" />
      </TouchableOpacity>
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
