import {createStore, combineReducers, applyMiddleware} from 'redux' 
import thunk from 'redux-thunk';
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
    return createStore(rootReducer,  applyMiddleware(logger, thunk));
  }
  
export default configureStore;

