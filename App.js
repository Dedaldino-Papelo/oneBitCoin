import {  useEffect, useState } from 'react'
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import CurrentPrice from './src/compoments/CurrentPrice/index'
import HistoryGraphic from './src/compoments/HistoryGraphic/index'
import QuotationList from './src/compoments/QuotationLists/index'
import QuotationItems from './src/compoments/QuotationLists/QuotationItems/index'

function addZero(number) {
  if(number <= 9){
    return "0" + number
  }
  return number
}

function url(qtdDays) {
  const date = new Date()
  const listLastDays = qtdDays
  const end_date = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`
  date.setDate(date.getDate() - listLastDays)
  const start_date = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`
}

async function getListCoins (url) {
  const response = await fetch(url)
  const returnApi = await response.json()
  let selectListQuotations = returnApi.bpi
  const queryCoinList = Object.keys(selectListQuotations).map((key) => {
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotations[key]
    }
  })
  let data = queryCoinList.reverse()
  return data
}

const getPriceCoinsGraphic = async (url) => {
  let responseG = await fetch(url)
  let returnApiG = await responseG.json()
  let selectListQuotationsG = returnApiG.bpi
  const queryCoinListG = Object.keys(selectListQuotationsG).map((key) => {
    return selectListQuotationsG[key]
  })
  let dataG = queryCoinListG
  return dataG
}


export default function App() {
  const [coinList, setCoinLists] = useState([])
  const [coinGraphicList, setcoinGraphicList] = useState([0])
  const [days, setDays] = useState(500)
  const [updateData, setupdateData] = useState(true)

  const updateDay = (number) => {
    setDays(number)
    setupdateData(true)
  }

  useEffect(() => {
    getListCoins (url(days)).then((resp) => {
      console.log(resp)
      setCoinLists(resp)
    }).catch(err => console.log(err))

    getPriceCoinsGraphic(url(days)).then((dataG) => {
      console.log(dataG)
      setcoinGraphicList(dataG)
    })

    if(updateData){
      setupdateData(false) 
    }
  }, [updateData])

  return (
    <View style={styles.container}>
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
