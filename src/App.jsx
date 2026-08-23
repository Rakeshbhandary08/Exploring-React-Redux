import React from 'react'
import Counting from './Counting'
import { Provider } from 'react-redux'
import itemStore from './swiggy/ItemStore'
import Header from './swiggy/Header'
import Cart from './swiggy/Cart'
import MyHeader from './myCounter/MyHeader'
import MyCounting from './myCounter/MyCounting'
import store4 from './reduxFetch/store'
import CoinCreate from './reduxFetch/coinCreate'

const App = () => {
  return (
    <Provider store={store4}>
       <CoinCreate/>
    </Provider>
  )
}

export default App