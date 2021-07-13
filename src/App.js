//Dependencies
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//Components
import LandingPage from './pages/LandingPage'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
      </Switch>
    </Router>
  )
}

export default App;
