const useFetch = data => {
  const url = 'http://localhost:3001/api/v1/user/login'

  fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
      //token: localStorage.getItem('token')
    }
  }).then(async res => {
    // window.location = '/profil'
    try {
      const content = await res.json()
      console.log(content)

      if (res.ok) {
        const token = content.body.token
        console.log(token)
        // const test = localStorage.setItem('token', token)
      }
    } catch (err) {
      console.log('Erreur :', err)
    }
  })
}

export default useFetch
