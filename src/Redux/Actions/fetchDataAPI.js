import { BASE_URL } from '../../utils'
import axios from 'axios'
import { useEffect } from 'react'

export const fetchDataAPI = () => dispatch => {
  useEffect(() => {
    axios
      .post(
        `${BASE_URL}/profile`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }
      )
      .then(res => {
        dispatch({
          type: 'FETCH_PROFIL',
          payload: {
            firstName: res.data.body.firstName,
            lastName: res.data.body.lastName
          }
        })
      })
      .catch(err => console.log(err))
  }, [])
}
