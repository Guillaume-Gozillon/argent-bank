import useFetch from '../useFetch'
export const USER_LOGIN = 'USER_LOGIN'

export const userLogin = data => async dispatch => {
  useFetch(data).then(json => {
    console.log('JSON', json)
    if (json.token) {
      localStorage.getItem('token', json)
      dispatch({
        type: 'USER_LOGIN',
        payload: json.token
      })
    } else {
      console.log(json.error)
    }
  })
}
