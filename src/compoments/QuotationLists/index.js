import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import styles from "./style";
import QuotationItems from "./QuotationItems/index";

const index = ({ filterDay, listTransactions }) => {
  return (
    <React.Fragment>
      <View style={styles.filters}>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => filterDay(500)}
        >
          <Text style={styles.textButtonQuery}>500D</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => filterDay(500)}
        >
          <Text style={styles.textButtonQuery}>505D</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => filterDay(600)}
        >
          <Text style={styles.textButtonQuery}>510D</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => filterDay(700)}
        >
          <Text style={styles.textButtonQuery}>515D</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => filterDay(800)}
        >
          <Text style={styles.textButtonQuery}>520D</Text>
        </TouchableOpacity>
      </View>
      
        <ScrollView>
            {
                listTransactions.map((item, index) => {
                    return <QuotationItems key={index} valor={item.valor} data={item.data} />;
                })
            }
          
        </ScrollView>
    </React.Fragment>
  );
};

export default index;
