import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Account from '../components/Account'
import { data } from '../utils'

const Profil = () => {
  return (
    <>
      <Nav />
      <main className='bank-account'>
        <h1>Welcolm back Guillaume Gozillon</h1>
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
