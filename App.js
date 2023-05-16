import { StyleSheet, StatusBar, Text, View } from 'react-native';
import CurrentPrice from './src/compoments/CurrentPrice/index'
import HistoryGraphic from './src/compoments/HistoryGraphic/index'
import QuotationList from './src/compoments/QuotationLists/index'
import QuotationItems from './src/compoments/QuotationLists/QuotationItems/index'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar 
        backgroundColor="#f50d41"
        barStyle="light-content"
         />
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationList />
      <QuotationItems />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center'
  },
});
