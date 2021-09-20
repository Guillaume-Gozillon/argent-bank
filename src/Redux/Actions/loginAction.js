export const connectAPI = (email, password, token) => dispatch => {
  dispatch({
    type: 'USER_LOGIN',
    payload: { email, password, token }
  })
}

export const fetchAPI = (firstName, lastName) => dispatch => {
  dispatch({
    type: 'USER_PROFIL',
    payload: { firstName, lastName }
  })
}
