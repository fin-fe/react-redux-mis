import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route,IndexRoute,browserHistory } from 'react-router'
import { createStore, combineReducers,applyMiddleware} from 'redux'
import { App, Home, Foo, Bar } from './containers'
export default function routes(store) {
  const validate = function (nextState, replaceState, callback) {
    // 需要做权限控制的时候开启
    // const isLoggedIn = !!store.getState().auth.authenticated
    // if (!isLoggedIn) {
    //   replaceState(null, '/login')
    // }
    callback()
  }
  const history = syncHistoryWithStore(browserHistory, store)
  return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                  <IndexRoute component={Home}/>
                  <Route path="foo" component={Foo}/>
                  <Route path="bar" component={Bar}/>
                </Route>
              </Router>
          </Provider>
  )
}
