import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  // REMOVE FONTAWESOM
  // FINIR LA VERSION MOBILE

  return (
    <nav>
      <Link to='/'>
        <img src={logo} alt='logo' />
      </Link>
      <div className='login'>
        <p className='logimg'>🧑‍💻</p>
        <Link to='/login'>Sign In</Link>
      </div>
    </nav>
  )
}

export default Nav
