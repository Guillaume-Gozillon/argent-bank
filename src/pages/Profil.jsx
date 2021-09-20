import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Account from '../components/Account'
import { data } from '../utils'
import { BASE_URL } from '../utils'
import axios from 'axios'

import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'

const Profil = () => {
  const token = useSelector(state => state.token)
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)

  useEffect(() => {
    axios
      .post(
        `${BASE_URL}/profile`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(res => {
        setFirstName(res.data.body.firstName)
        setLastName(res.data.body.lastName)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Nav />
      <main className='bank-account'>
        <h1>Welcome back</h1>
        {firstName && (
          <h2 className='name'>
            {firstName} {lastName}!
          </h2>
        )}
        <button className='edit-button'>Edit Name</button>
        {data.map(detail => (
          <Account detail={detail} key={detail.key} />
        ))}
      </main>
      <Footer />
    </>
  )
}

export default Profil
