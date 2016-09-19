import { createStore, compose, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import Immutable from 'immutable'
import { combineReducers } from 'redux-immutable'
import { RECEIVE_NUMBER, UPDATE_DISPLAYS } from './actions'

const INITIAL_STATE = Immutable.fromJS({
  allNumbers: [],
  chartDisplayedNumbers: [],
  tickerDisplayedNumbers: [],
})

const numbers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_NUMBER:
      return state.update('allNumbers',
        selectedState =>
          selectedState.insert(0, Immutable.fromJS(action.numberObject)).slice(0, 100))
    case UPDATE_DISPLAYS: {
      return state.withMutations(ctx => {
        ctx
          .set('chartDisplayedNumbers', state.get('allNumbers').reverse())
          .set('tickerDisplayedNumbers', state.get('allNumbers').slice(0, 20))
      })
    }
    default:
      return state
  }
}


const reducers = combineReducers({ numbers })

const configureStore = (initialState) =>
  createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(ReduxThunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

export default configureStore
