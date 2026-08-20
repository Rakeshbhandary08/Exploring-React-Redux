import React from 'react'
import Counting from './Counting'
import { Provider } from 'react-redux'
import itemStore from './swiggy/ItemStore'
import Header from './swiggy/Header'
import Cart from './swiggy/Cart'

const App = () => {
  return (
    <Provider store={itemStore}>
       <Header/>
       <Cart/>
    </Provider>
  )
}

export default App