import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

const index = () => {
  return (
        <View style={styles.mainContent}>
          <View style={styles.contextLeft}>
            <View style={styles.boxLogo}>
              <Image 
                source={require("../../../img/icons8-bitcoin-100.png")}
                style={styles.logBitCoin}
                 />
              <Text style={styles.dayQuotation}> 16/05/2023 </Text>
            </View>
          </View>

          <View style={styles.contextRight}>
              <Text style={styles.price}> 4556778 </Text>
          </View>
        </View>
  )
}

export default index