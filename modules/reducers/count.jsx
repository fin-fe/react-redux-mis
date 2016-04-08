import * as types from '../constants/ActionTypes'

const initialState = {
  number: 1
}

export default function update(state=initialState, action) {
  if(action.type === types.INCREASE) {
    console.log('INCREASE',state)
    return { number: state.number + action.amount }
  }
  else if(action.type === types.DECREASE) {
  	console.log('DECREASE',state)
    return { number: state.number - action.amount }
  }
  return state
}
