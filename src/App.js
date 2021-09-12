import React from 'react'
//Dependencies
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
//Components
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import AboutEventPage from './pages/AboutEventPage'
import WhoAreUs from './pages/WhoAreUs'
import InscriptionPage from './pages/InscriptionPage'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/landing" component={LandingPage}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/inscripcion" component={InscriptionPage}/>
        <Route exact path="/evento" component={AboutEventPage}/>
        <Route exact path="/capitulo" component={WhoAreUs}/>
      </Switch>
    </Router>
  )
}

export default App;
