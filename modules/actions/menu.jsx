import fetch from 'isomorphic-fetch'
import * as types from '../constants/ActionTypes'

function requestMenu() {
  return {
    type: types.REQUEST_MENU
  }
}
function receiveMenu(json) {
  return {
    type: types.RECEIVE_MENU,
    menus: json,
    receivedAt: Date.now()
  }
}

function fetchMenu() {
  return dispatch => {
    dispatch(requestMenu())
    return fetch(`http://10.46.144.97:8080/server/menu.json`)
      .then(
        response => response.json())
      .then(json => dispatch(receiveMenu(json)))
  }
}
/*
缓存、频繁请求
*/
function shouldFetchMenus(state) {
  const menus = state.menu
  if (!menus) {
    return true
  } else if (menus.isFetching) {
    return true
  } else {
    return menus.didInvalidate
  }
}

export function fetchMenusIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchMenus(getState())) {
      return dispatch(fetchMenu())
    }
  }
}





