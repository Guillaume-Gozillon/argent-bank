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

  const firstName = useSelector(state => state.firstName)
  const lastName = useSelector(state => state.lastName)
  const isAuth = useSelector(state => state.isAuth)
  const token = useSelector(state => state.token)
  const button = useSelector(state => state.button)

  const showButton = () => dispatch(clickButton(true))

  if (!isAuth) return <Redirect to='/login' />

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
