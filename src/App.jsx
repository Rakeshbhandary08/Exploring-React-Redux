import React from 'react'
import Counting from './Counting'
import { Provider } from 'react-redux'
import store from './Stores'
import CustomCounter from './CustomCounter'

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <Counting/>
      <br/>
      <br/>
      <CustomCounter/>
      </Provider>
    </div>
  )
}

export default App