import logo from '../img/logo.png'

const Nav = () => {

    // REMOVE FONTAWESOM
    // FINIR LA VERSION MOBILE 

    return (
        <nav>
            <img src={logo} alt="logo" />
            <div className="login">
                <p className='logimg'>🧑‍💻</p>
                <p>Sign In</p>
            </div>
        </nav>
    )
}

export default Nav
