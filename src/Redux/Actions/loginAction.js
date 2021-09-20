export const USER_LOGIN = 'USER_LOGIN'

export const loginApi = (email, password, token) => dispatch => {
  dispatch({
    type: 'USER_LOGIN',
    payload: {
      email: email,
      password: password,
      token: token
    }
  })
}
