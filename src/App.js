import React from 'react'
//Dependencies
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
//Components
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import SchedulePage from './pages/SchedulePage'
import SpeakersPage from './pages/SpeakersPage'
import InscriptionPage from './pages/InscriptionPage'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/inscripcion" component={InscriptionPage}/>
        <Route exact path="/cronograma" component={SchedulePage}/>
        <Route exact path="/ponentes" component={SpeakersPage}/>
      </Switch>
    </Router>
  )
}

export default App;
