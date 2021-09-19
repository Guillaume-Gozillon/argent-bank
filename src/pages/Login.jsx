import Nav from '../components/Nav'
import Footer from '../components/Footer'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLogin } from '../a - actions/userAction'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAuth, setIsAuth] = useState(false)
  
  const BASE_URL = 'http://localhost:3001/api/v1/user'
  const data = JSON.stringify({ email, password })

  const dispatch = useDispatch()

  const handleEmail = e => setEmail(e.target.value)
  const handlePassword = e => setPassword(e.target.value)

  const submitLogin = e => {
    e.preventDefault()
    dispatch(userLogin(data, BASE_URL))
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
        <button onClick={submitLogin}>REDUX CONNECT</button>
      </form>
      <Footer />
    </div>
  )
}

export default Login
