export const USER_LOGIN = 'USER_LOGIN'

export const userLogin = (data, BASE_URL) => dispatch => {
  fetch(`${BASE_URL}/login`, {
    method: 'POST',
    body: data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(async res => {
    try {
      const content = await res.json()
      console.log(content);

      if (res.ok) {
        const token = content.body.token
        const dataFetched = JSON.parse(data)

        //localStorage.setItem('token', token)

        dispatch({
          type: 'USER_LOGIN',
          payload: {
            email: dataFetched.email,
            password: dataFetched.password,
            token: token
          }
        })
      }
    } catch (err) {
      console.log('Erreur:', err)
    }
  })
}
