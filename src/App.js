import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Placed from './pages/Placed';
import NoUpdate from './pages/NoUpdate';
import Rejected from './pages/Rejected';
import SignIn from './pages/SignIn';


function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/placed' component={Placed} />
        <Route path='/no-update' component={NoUpdate} />
        <Route path='/rejected' component={Rejected} />
        <Route path='/sign-in' component={SignIn} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
