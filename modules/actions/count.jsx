import * as types from '../constants/ActionTypes'

export function increase(n) {
	console.log('ActionTypes increase');
  return {
    type: types.INCREASE,
    amount: n
  }
}

export function decrease(n) {
  return {
    type: types.DECREASE,
    amount: n
  }
}
