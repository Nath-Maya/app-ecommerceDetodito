import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Stars from 'react-native-stars'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function ProductRating( { rating }) {
  return (
    <View style={styles.ratingContainer}>
      <Stars
        default={rating.rate}
        count={5}
        half={true}
        starSize={25}
        fullStar={<Icon name={'star'} style={[styles.star, styles.fullStar]} />}
        emptyStar={<Icon name={'star-outline'} style={[styles.star, styles.emptyStar]} />}
        halfStar={<Icon name={'star-half'} style={[styles.star, styles.halfStar]} />}
      />
      <Text style={styles.ratingText}>{rating.rate}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
      },
      star: {
        marginHorizontal: 2,
      },
      fullStar: {
        color: 'gold',
      },
      emptyStar: {
        color: 'grey',
      },
      halfStar: {
        color: 'gold',
      },
      ratingText: {
        marginLeft: 8,
        fontSize: 16,
        color: '#888',
      },
})