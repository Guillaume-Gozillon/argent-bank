import { USER_LOGIN } from "../a - actions/userAction"
const initialState = { isAuth: null }

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN: {
      return {...state, 
        isAuth: action.payload
      }
    }
    default:
      return {...state}
  }
}
