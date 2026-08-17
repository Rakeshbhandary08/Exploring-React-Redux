import React from 'react'
import Counting from './Counting'
import { Provider } from 'react-redux'
import store from './Stores'

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <Counting/>
      </Provider>
    </div>
  )
}

export default App