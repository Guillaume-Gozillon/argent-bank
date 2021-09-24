import logo from '../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Nav = () => {
  const [name, isAuth] = useSelector(state => [state.firstName, state.isAuth])

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
          <div className='logout'>
            <FontAwesomeIcon className='signImg' icon={faSignOutAlt} />
            <Link to='/'>Sign Out</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav
