export const USER_LOGIN = 'USER_LOGIN'
import { BASE_URL } from '../../utils'
import axios from 'axios'

export const connectAPP = data => dispatch => {
  axios
    .post(`${BASE_URL}/profile`, data)
    .then(res => {
      console.log('TEST', res)
      if (res.status === 200) setIsAuth(true)
      dispatch({
        type: 'USER_LOGIN',
        payload: {
          email: res.data.body.firstName,
          password: res.data.body.lastName,
          token
        }
      })
    })
    .catch(err => console.log(err))
}
