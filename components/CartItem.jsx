import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import RemoveButton from "./IconRemove";
import QuantitySelector from "./QuantitySelector";


export default function CartItem({ id, image, title, price }) {

  
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
        <View style={styles.containerCtrl}>
          <QuantitySelector id={id} />
          <RemoveButton style={styles.iconRemove} id={id} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center",
    padding: 8,
    margin: 7,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  image: {
    width: '30%', 
    height: '100%',
    borderRadius: 5,
    marginRight: 12,
  },
  details: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#888",
    marginTop: 10,
  },
  iconRemove: {
    alignSelf: 'baseline',
  },
  containerCtrl: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
