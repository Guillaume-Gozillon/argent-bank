import { BASE_URL } from '../../utils'
import axios from 'axios'

export const connectAPI = (email, password, isAuth) => dispatch => {
  isAuth = true

  axios
    .post(`${BASE_URL}/login`, { email, password })
    .then(res => {
      localStorage.setItem('token', res.data.body.token)
      dispatch({
        type: 'CONNECT_API',
        payload: {
          email,
          password,
          token: res.data.body.token,
          isAuth
        }
      })
    })
    .catch(err => console.log(err))
}
