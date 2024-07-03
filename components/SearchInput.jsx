import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { SearchIcon } from '../icons/SearchIcon'


export default function SearchInput( props ) {
  
  return (
    <View style={styles.searchInput}>
      <SearchIcon/>
      <TextInput placeholder='Buscar producto...'{...props}/>
    </View>
  )
}

const styles = StyleSheet.create({
  searchInput: {
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    margin: 8
  },
})