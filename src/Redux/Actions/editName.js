import { BASE_URL } from '../../utils'
import axios from 'axios'

export const editName = (firstName, lastName) => dispatch => {
  axios
    .put(
      `${BASE_URL}/profile`,
      { firstName, lastName },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      }
    )
    .then(res => {
      dispatch({
        type: 'UPDATE_NAME',
        payload: {
          firstName: res.data.body.firstName,
          lastName: res.data.body.lastName
        }
      })
    })
    .catch(err => console.log(err))
}
