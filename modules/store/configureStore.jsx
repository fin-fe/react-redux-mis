
import { createStore,combineReducers,applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunkMiddleware from 'redux-thunk'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
export default function configureStore(initialState) {
const createStoreWithMiddleware = applyMiddleware(
		thunkMiddleware
		)(createStore)
const store = createStoreWithMiddleware(
			  combineReducers({
				...rootReducer,
				routing: routerReducer
		    }),initialState)
 return store
}
