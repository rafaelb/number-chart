import io from 'socket.io-client'
import throttle from 'lodash.throttle'

export const RECEIVE_NUMBER = 'RECEIVE_NUMBER'
export const UPDATE_DISPLAYS = 'UPDATE_DISPLAYS'

const receiveNumber = (numberObject) => ({
  type: RECEIVE_NUMBER,
  numberObject,
})

const updateDisplays = () => ({
  type: UPDATE_DISPLAYS,
})


export const fetchNumbers = () => dispatch => {
  const throttledUpdateDisplays = throttle(() => dispatch(updateDisplays()), 500)
  const socket = io()
  socket.on('number', (numberObject) => {
    dispatch(receiveNumber(numberObject))
    throttledUpdateDisplays()
  })
}
