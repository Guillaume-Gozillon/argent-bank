import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { BASE_URL } from '../utils'

import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { connectAPI } from '../Redux/Actions/loginAction'
import { connectAPP } from '../Redux/Actions/connectAPI'
import { Redirect } from 'react-router'

const Login = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAuth, setIsAuth] = useState(false)

  const handleEmail = e => setEmail(e.target.value)
  const handlePassword = e => setPassword(e.target.value)

  const data = { email, password, token: '' }
  const dataTest = { email, password }
  
  
  const submitLogin = async e => {
    e.preventDefault()
    dispatch(connectAPP(data))

 //   console.log(data);
    if (email !== '') {
      axios
        .post(`${BASE_URL}/login`, dataTest)
        .then(res => {
          console.log(res);
          const token = res.data.body.token

          dispatch(connectAPI(email, password, token))
          if (res.status === 200) setIsAuth(true)
        })
        .catch(err => console.log('Nouvelle erreur', err))
    }
  }

  if (isAuth) return <Redirect to='/profil' />

  return (
    <>
      <Nav />
      <main className='form'>
        <div className='form-container'>
          <FontAwesomeIcon className='logimg' icon={faUserCircle} />
          <h1>Sign In</h1>
          <form id='sign-up-form'>
            <label htmlFor='email' className='label-bold'>
              Username
            </label>
            <br />
            <input
              type='text'
              name='email'
              id='email'
              onChange={handleEmail}
            />
            <br />
            <label htmlFor='password' className='label-bold'>
              Password
            </label>
            <br />
            <input
              type='password'
              name='password'
              id='password'
              onChange={handlePassword}
            />
            <br />
            <input type='checkbox' id='remember-me' />
            <label htmlFor='remember-me' id='check-label'>
              Remember me
            </label>
            <br />
            <button onClick={submitLogin} className='sign-button'>
              Sign In
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Login
