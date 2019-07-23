import {createStore, combineReducers, applyMiddleware} from 'redux' 
import loginReducer from './reducers/loginReducer'
import fetchReducer from './reducers/fetchReducer'
import logger from 'redux-logger'
const rootReducer = combineReducers(
    {
        loginReducer : loginReducer,
        fetchReducer : fetchReducer
    }
)
const configureStore = () => {
    return createStore(rootReducer,  applyMiddleware(logger));
  }
  
export default configureStore;

