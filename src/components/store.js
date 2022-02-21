import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { restaurantsListReducer } from '../reducers/restaurantReducer'

const reducers = combineReducers({
    restaurantReducer :restaurantsListReducer,
})
const initialState = {}
const middleware = [thunk]

const store = createStore(reducers, initialState, applyMiddleware(...middleware))
export default store