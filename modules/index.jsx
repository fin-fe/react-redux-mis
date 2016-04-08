
import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers,applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import { Router, Route,IndexRoute,browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import reducers from './reducers'
import { App, Home, Foo, Bar } from './containers'
import configureStore from './store/configureStore'

const store = configureStore()
// Create an enhanced history that syncs navigation events with the store
//创建一个history对象用store来同步导航事件
const history = syncHistoryWithStore(browserHistory, store)
// Configure routes like normal 
render(
  <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="foo" component={Foo}/>
          <Route path="bar" component={Bar}/>
        </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
)






