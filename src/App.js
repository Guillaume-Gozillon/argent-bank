import "./styles/app.scss"
import Home from "./pages/Home"
import Login from "./pages/Login"


import { Switch, Route } from "react-router"

const App = () => {
  return (
    <div className="App">
      <Switch>
      <Route path='/' exact >
        <Home />
      </Route>
      <Route path='/login' exact >
        <Login />
      </Route>
      </Switch>
    </div>
  )
}

export default App
