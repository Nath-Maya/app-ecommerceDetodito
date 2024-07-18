import { StyleSheet } from 'react-native';
import React from 'react';
import { Chip, useTheme } from 'react-native-paper';

export default function ItemCategory({ name, onPress, selected }) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <Chip
      mode='outlined'
      onPress={onPress}
      selected={selected}
      icon={selected ? 'check' : undefined}
      textStyle={selected ? styles.selectedText : styles.text}
      style={selected ? styles.selectedChip : styles.chip}
    >
      {name}
    </Chip>
  );
}

const createStyles = (colors) =>
  StyleSheet.create({
    chip: {
      margin: 4,
      borderColor: colors.primary,
    },
    selectedChip: {
      margin: 4,
      backgroundColor: colors.onPrimaryContainer, 
      borderColor: colors.onPrimaryContainer, 
    },
    text: {
      color: colors.primary, 
    },
    selectedText: {
      color: colors.onPrimary, 
    },
  });
