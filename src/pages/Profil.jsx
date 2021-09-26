import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Account from '../components/Account'
import EditButton from '../components/EditButton'
import { data } from '../utils'

import { useDispatch, useSelector } from 'react-redux'
import { fetchDataAPI } from '../Redux/Actions/fetchDataAPI'
import { clickButton } from '../Redux/Actions/editButton'
import { loginOut } from '../Redux/Actions/loginOut'
import { Redirect } from 'react-router'

const Profil = () => {
  const dispatch = useDispatch()
  dispatch(fetchDataAPI())

  const [firstName, lastName, isAuth, button] = useSelector(state => [
    state.firstName,
    state.lastName,
    state.isAuth,
    state.button
  ])

  const showButton = () => dispatch(clickButton(true))

  if (!isAuth) {
    dispatch(loginOut(false))
    return <Redirect to='/' />
  }

  return (
    <>
      <Nav />
      <main className='bank-account'>
        <h1>Welcome back</h1>
        <h2 className='name'>
          {firstName} {lastName} !
        </h2>
        {button === false ? (
          <button className='edit-button' onClick={showButton}>
            Edit Name
          </button>
        ) : (
          <EditButton />
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
