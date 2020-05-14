import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components
import Header from '../Header'
import Welcome from '../Welcome'
import Landing from '../Landing'
import Login from '../Login'
import SignUp from '../SignUp'
import ErrorPage from '../ErrorPage'
import Footer from '../Footer'
import ForgetPassword from '../ForgetPassword'

// CSS
import '../../css/App.css'

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgetpassword" component={ForgetPassword} />
        <Route component={ErrorPage} />
      </Switch>

      <Footer />
    </Router>
  )
}

export default App
