import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <nav>
      <Link to='/'>
        <img src={logo} alt='logo' />
      </Link>
      <div className='loginNav'>
        <FontAwesomeIcon className='signImg' icon={faUserCircle} />
        <Link to='/login'>Sign In</Link>
      </div>
    </nav>
  )
}

export default Nav
