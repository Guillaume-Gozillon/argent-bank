import Nav from '../components/Nav'
import Footer from '../components/Footer'

import { useState } from 'react'
import useFetch from '../useFetch'
import { useDispatch } from 'react-redux'
import { userLogin } from '../a - actions/userAction'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const BASE_URL = 'http://localhost:3001/api/v1/user'

  const dispatch = useDispatch()

  const handleEmail = e => {
    setEmail(e.target.value)
  }
  const handlePassword = e => {
    setPassword(e.target.value)
  }

  const submitLogin = e => {
    e.preventDefault()

    // let data = JSON.stringify({
    //   email,
    //   password
    // })

    let data = JSON.stringify({
      email,
      password
    })
    
    dispatch(userLogin(data, BASE_URL))
    //useFetch(data)
  }

  return (
    <div>
      <Nav />
      <form id='sign-up-form'>
        <label htmlFor='email'>Email</label>
        <br />
        <input
          type='text'
          name='email'
          id='email'
          onChange={handleEmail}
          value={email}
        />
        <br />
        <label htmlFor='password'>Mot de passe</label>
        <br />
        <input
          type='password'
          name='password'
          id='password'
          onChange={handlePassword}
          value={password}
        />
        <button onClick={submitLogin} type='submit'>
          Se connecter
        </button>
        <button onClick={submitLogin}>
          REDUX CONNECT
        </button>
      </form>
      <Footer />
    </div>
  )
}

export default Login

{
  /* 
  fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(async res => {
    // window.location = '/profil'
    try {
      console.log(res)
      const content = await res.json()
      console.log(content)
    } catch (err) {
      console.log('Erreur :', err)
    }
  })
*/
}
