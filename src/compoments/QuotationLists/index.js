import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const index = () => {
  return (
    <>
        <View style={styles.filters}>
            <TouchableOpacity style={styles.buttonQuery}>
                <Text style={styles.textButtonQuery}>7D</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonQuery}>
                <Text style={styles.textButtonQuery}>15M</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonQuery}>
                <Text style={styles.textButtonQuery}>1M</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonQuery}>
                <Text style={styles.textButtonQuery}>3M</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonQuery}>
                <Text style={styles.textButtonQuery}>6M</Text>
            </TouchableOpacity>

        </View>
    </>
  )
}

export default index