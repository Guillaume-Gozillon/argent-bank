import './styles/app.scss'
import Home from './pages/Home'
import Login from './pages/Login'
import Profil from './pages/Profil'

import { Switch, Route } from 'react-router'

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/Profil' exact>
          <Profil />
        </Route>
      </Switch>
    </div>
  )
}

export default App
