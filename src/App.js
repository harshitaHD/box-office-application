import React from 'react';
import { Switch, Route } from 'react-router-dom'

// import Navigation from './components/Navigation';
import Home from './pages/Home';
import Show from './pages/Show';
import Starred from './pages/Starred';

const App = () => {
  return (
    /* switch displays the components of paths given */
      <Switch>
      {/*The path for home page */}
      <Route exact path='/'>
      <Home />
      </Route>

      {/*The path for starred page */}
      <Route exact path='/starred'>
      <Starred />
      </Route>

      {/*The path for show details page */}
      <Route exact path='/show/:id'>
      <Show />
      </Route>

      <Route>
      <div>
      Not Found
      </div>
      </Route>

      </Switch>
  
  )
}

export default App;
