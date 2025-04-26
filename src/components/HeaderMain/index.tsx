import { Image, Text, View } from "react-native";
import styles from "./styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const index = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={require("../../../assets/House.png")}
        />
        <View style={styles.headerOneView}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Ev</Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 12,
              color: "#6E7480",
              marginLeft: 8,
              marginRight: 3,
            }}
          >
            Dedepaşa Blv. Yenişehir Mahallesi...
          </Text>
          <MaterialIcons name="keyboard-arrow-right" size={22} color="black" />
        </View>
        <View style={styles.headerTwo}>
          <Text style={{ fontSize: 13, fontWeight: "bold", color: "#5D3EBD" }}>
            TVS
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "#5D3EBD" }}>
            13{" "}
            <Text
              style={{ fontSize: 12, fontWeight: "bold", color: "#5D3EBD" }}
            >
              dk
            </Text>
          </Text>
        </View>
      </View>

      <View></View>
    </View>
  );
};

export default index;
