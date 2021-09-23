import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Account from '../components/Account'
import EditButton from '../components/EditButton'
import { data, BASE_URL } from '../utils'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAPI, updateButton } from '../Redux/Actions/loginAction'

const Profil = () => {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const button = useSelector(state => state.showButton)
  const firstNameUpdate = useSelector(state => state.firstName)
  const lastNameUpdate = useSelector(state => state.lastName)

  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [showButton, setShowButton] = useState(false)

  const showEditButton = () => setShowButton(true)
  const bouton = false

  // AUtenghtification = verifier si il y un token
  // et en faire une copie dans le localstorage
  // clear le local storage pour la deconnextniob

  useEffect(() => {
    axios
      .post(
        `${BASE_URL}/profile`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(res => {
        console.log(res);
        setFirstName(res.data.body.firstName)
        setLastName(res.data.body.lastName)
      })
      .catch(err => console.log(err))
    dispatch(fetchAPI(firstName, lastName))
  }, [firstName, lastName])

  useEffect(() => {
    dispatch(updateButton(showButton))
  }, [showEditButton])

  return (
    <>
      <Nav />
      <main className='bank-account'>
        <h1>Welcome back</h1>
        <h2 className='name'>
          {firstNameUpdate} {lastNameUpdate}!
        </h2>
        {button === false ? (
          <button className='edit-button' onClick={showEditButton}>
            Edit Name
          </button>
        ) : (
          <EditButton
            firstNameUpdate={firstNameUpdate}
            lastNameUpdate={lastNameUpdate}
          />
        )}

        {data.map(detail => (
          <Account detail={detail} key={detail.key} />
        ))}
      </main>
      <Footer />
    </>
  )
}

export default Profil
