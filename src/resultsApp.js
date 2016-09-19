import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Container from './resultsContainer'

export default (
  <Provider store={store()} >
    <Container />
  </Provider>
)
