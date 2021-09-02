import Nav from '../components/Nav'
import Footer from '../components/Footer'
import axios from 'axios'
import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = e => {
    e.preventDefault()

    axios({
      method: 'post',
      url: process.env.REACT_APP_DATABASE_URL,
      withCredentials: true,
      data: {
        email,
        password
      }
    }).then(res => {
      console.log(res)
    })
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
