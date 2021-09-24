import { useEffect } from 'react'

export const loginOut = isAuth => dispatch => {
  localStorage.clear()
  useEffect(() => {
    dispatch({
      type: 'LOGIN_OUT',
      payload: {
        isAuth,
        email: null,
        password: null,
        token: null,
        firstName: null,
        lastName: null,
        button: false
      }
    })
  })
}
