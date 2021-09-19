import Nav from '../components/Nav'
import Footer from '../components/Footer'

import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginApi } from '../a - actions/loginAction'
import { Redirect } from 'react-router'

const Login = () => {
  const dispatch = useDispatch()
  const BASE_URL = 'http://localhost:3001/api/v1/user'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAuth, setIsAuth] = useState(false)

  const handleEmail = e => setEmail(e.target.value)
  const handlePassword = e => setPassword(e.target.value)

  const data = { email, password, token: '' }

  const submitLogin = async e => {
    e.preventDefault()

    if (email !== '') {
      axios
        .post(`${BASE_URL}/login`, data)
        .then(res => {
          const token = res.data.body.token

          dispatch(loginApi(email, password, token))
          if (res.status === 200) setIsAuth(true)
        })
        .catch(err => console.log('Nouvelle erreur', err))
    }
  }

  if (isAuth) return <Redirect to='/profil' />

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
        <button onClick={submitLogin}>Se connecter</button>
      </form>
      <Footer />
    </div>
  )
}

export default Login
