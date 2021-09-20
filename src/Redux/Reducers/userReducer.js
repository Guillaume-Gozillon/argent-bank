import { USER_LOGIN } from "../Actions/loginAction"
const initialState = { email: null, password: null, token: null }

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        token: action.payload.token
      }
    }
    default:
      return { ...state }
  }
}
