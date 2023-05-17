import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

const index = ({ currentPrice }) => {
  return (
    <View style={styles.headerPrice}>
      <Text style={styles.currentPrice}>$ {currentPrice}</Text>
      <Text style={styles.textPrice}>Last Quotation</Text>
    </View>
  )
}

export default index