import React from 'react'
import Counting from './Counting'
import { Provider } from 'react-redux'
import itemStore from './swiggy/ItemStore'
import Header from './swiggy/Header'
import Cart from './swiggy/Cart'
import MyHeader from './myCounter/MyHeader'
import MyCounting from './myCounter/MyCounting'

const App = () => {
  return (
    <Provider store={itemStore}>
       <MyHeader/>
    </Provider>
  )
}

export default App