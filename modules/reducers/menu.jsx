import * as types from '../constants/ActionTypes'

const initialState={
  isFetching: true,
  didInvalidate: false,
  lastUpdated: 1439478405547,
  items: []
}
export default function menusReducer(state = initialState, action) {
  switch (action.type) {   
    case types.REQUEST_MENU:    
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case types.RECEIVE_MENU:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.menus,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}