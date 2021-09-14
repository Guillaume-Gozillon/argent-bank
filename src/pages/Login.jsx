import Nav from '../components/Nav'
import Footer from '../components/Footer'

import { useState } from 'react'
import useFetch from '../useFetch'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = e => {
    e.preventDefault()

    let data = JSON.stringify({
      email,
      password
    })

    useFetch(data)

    //fetch(url, {
    //  method: 'POST',
    //  body: data,
    //  headers: {
    //    Accept: 'application/json',
    //    'Content-Type': 'application/json'
    //  }
    //}).then(async res => {
    //  // window.location = '/profil'
    //  try {
    //    console.log(res)
    //    const content = await res.json()
    //    console.log(content)
    //  } catch (err) {
    //    console.log('Erreur :', err)
    //  }
    //})
  }
  {
    /* 
    axios({
      method: 'post',
      url: 'http://localhost:3001/api/v1/user/login',
      // withCredentials: true,
      data: {
        email,
        password
      }
    }).then(res => {
      // window.location = '/profil'
      console.log(res)
      console.log(res.data.body.token)
    })
*/
  }

  return (
    <div>
      <Nav />
      <form action='' onSubmit={handleLogin} id='sign-up-form'>
        <label htmlFor='email'>Email</label>
        <br />
        <input
          type='text'
          name='email'
          id='email'
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <label htmlFor='password'>Mot de passe</label>
        <br />
        <input
          type='password'
          name='password'
          id='password'
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <input type='submit' value='Se connecter' />
      </form>
      <Footer />
    </div>
  )
}

export default Login

// axios({
//   method: 'post',
//   url: 'http://localhost:3001/api/v1/user/signup',
//   data: {
//     email,
//     password
//   }
// }).then(res => {
//   console.log(res)
// })
