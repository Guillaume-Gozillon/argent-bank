import useFetch from '../useFetch'
export const USER_LOGIN = 'USER_LOGIN'

export const userLogin = data => async dispatch => {
  useFetch(data).then(json => {

      dispatch({
        type: 'USER_LOGIN',
        payload: {
            login: localStorage.getItem('token')
        }
      })

  })
}
