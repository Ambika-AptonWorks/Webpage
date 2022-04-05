import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import CreateAccount from './components/pages/CreateAccount';


function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route exact path='/'  />
          <Route exact path="/Home"  component={Home} />
          <Route exact path="/Services"  component={Services} />
          <Route exact path="/CreateAccount" component={CreateAccount} />
        </Switch>
    </Router>
    </>
    
  );
}

export default App;
