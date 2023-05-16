import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

const index = () => {
  return (
    <View style={styles.headerPrice}>
      <Text style={styles.currentPrice}>$ 5678.998</Text>
      <Text style={styles.textPrice}>Last Quotation</Text>
    </View>
  )
}

export default index