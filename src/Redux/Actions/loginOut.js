export const loginOut = isAuth => dispatch => {
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
}
