import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

const index = ({ valor, data }) => {
  return (
        <View style={styles.mainContent}>
          <View style={styles.contextLeft}>
            <View style={styles.boxLogo}>
              <Image 
                source={require("../../../img/icons8-bitcoin-100.png")}
                style={styles.logBitCoin}
                 />
              <Text style={styles.dayQuotation}> {data} </Text>
            </View>
          </View>

          <View style={styles.contextRight}>
              <Text style={styles.price}> {valor} </Text>
          </View>
        </View>
  )
}

export default index