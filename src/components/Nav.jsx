import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import { useDispatch, useSelector } from 'react-redux'
import { loginOut } from '../Redux/Actions/loginOut'

const Nav = () => {
  const dispatch = useDispatch()
  const name = useSelector(state => state.firstName)
  const isAuth = useSelector(state => state.isAuth)

  const logOut = () => dispatch(loginOut(false))

  return (
    <nav>
      <Link to='/'>
        <img src={logo} alt='logo' />
      </Link>
      <div className='loginNav'>
        <FontAwesomeIcon className='signImg' icon={faUserCircle} />
        {isAuth && <p>Welcome {name}</p>}
        {isAuth === false ? (
          <Link to='/login'>Sign In</Link>
        ) : (
          <a onClick={logOut}>
            Sign Out
          </a>
        )}
      </div>
    </nav>
  )
}

export default Nav
