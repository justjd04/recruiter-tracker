import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Placed from './pages/Placed';
import NoUpdate from './pages/NoUpdate';
import Rejected from './pages/Rejected';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <Header/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/placed' exact component={Placed} />
        <Route path='/no-update' exact component={NoUpdate} />
        <Route path='/rejected' exact component={Rejected} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/sign-up' exact component={SignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
