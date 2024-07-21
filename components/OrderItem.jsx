import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { formatDate } from '../utils/formatDate';
import { formatPrice } from '../utils/formatPrice';
import { useTheme } from 'react-native-paper';

export default function OrderItem({ createdAt, totalPrice }) {
  const formattedDate = formatDate(createdAt);
  const formattedPrice = formatPrice(totalPrice);
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.orderItem}>
      <Text style={styles.date}>{formattedDate}</Text>
      <Text style={styles.price}>{formattedPrice}</Text>
    </View>
  );
}

const createStyles = (colors) => StyleSheet.create({
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
  },
  date: {
    fontSize: 16,
    color: colors.text,
  },
  price: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: 'bold',
  },
});
