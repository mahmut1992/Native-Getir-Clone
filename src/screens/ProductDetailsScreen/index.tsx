import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Product } from "../../models";
import ImageCareousel from "../../components/ImageCareousel";
import DetailBox from "../../components/DetailBox";
import DetailProperty from "../../components/DetailProperty";
import CardButton from "../../components/CardButton";

const index = (props) => {
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    setProduct(props.route.params.product);
  }, []);
  return (
    <View>
      <ScrollView>
        <ImageCareousel images={product?.images} />
        <DetailBox
          price={product?.fiyat}
          name={product?.name}
          quantity={product?.miktar}
        />
        <Text
          style={{
            paddingHorizontal: 10,
            paddingVertical: 14,
            color: "#808B99",
            fontWeight: "600",
          }}
        >
          Detaylar
        </Text>
        <DetailProperty />
      </ScrollView>
      <CardButton item={product} />
    </View>
  );
};

export default index;
