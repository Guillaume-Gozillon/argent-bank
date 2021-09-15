import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import logoutReducer from './logoutReducer'

export const rootReducer = combineReducers({
  loginReducer,
  logoutReducer
  //editProfilReducer
})
