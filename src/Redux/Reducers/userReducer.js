import {
  CONNECT_API,
  FETCH_PROFIL,
  UPDATE_NAME,
  CLICK_BUTTON,
  LOGIN_OUT
} from '../constantes'

const initialState = {
  email: null,
  password: null,
  token: null,
  firstName: null,
  lastName: null,
  isAuth: false,
  button: false
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case CONNECT_API: {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        token: action.payload.token,
        isAuth: action.payload.isAuth
      }
    }
    case FETCH_PROFIL: {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      }
    }
    case CLICK_BUTTON: {
      return {
        ...state,
        button: action.payload.button
      }
    }
    case UPDATE_NAME: {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      }
    }
    case LOGIN_OUT: {
      return {
        ...state,
        isAuth: action.payload.isAuth,
        email: action.payload.email,
        password: action.payload.password,
        token: action.payload.token,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        button: action.payload.button
      }
    }
    default:
      return state
  }
}
