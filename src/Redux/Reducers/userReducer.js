import {
  USER_LOGIN,
  USER_PROFIL,
  UPDATE_NAME,
  UPDATE_BUTTON
} from '../constantes'

const initialState = {
  email: null,
  password: null,
  token: null,
  firstName: null,
  lastName: null,
  //bouton = false
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
    case UPDATE_NAME: {
      return {
        ...state,
        firstName: action.payload.handlefirstName,
        lastName: action.payload.handleLastName
      }
    }
    case UPDATE_BUTTON: {
      return {
        ...state,
        showButton: action.payload.showButton
      }
    }
    default:
      return state
  }
}
