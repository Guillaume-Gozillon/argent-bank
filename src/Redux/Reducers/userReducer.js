import { USER_LOGIN, USER_PROFIL } from '../constantes'

const initialState = {
  email: null,
  password: null,
  token: null,
  firstName: null,
  lastName: null
}

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
    case USER_PROFIL: {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      }
    }
    default:
      return state
  }
}
