import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import CreateAccount from './components/pages/CreateAccount';


function App() {
  return (
    <>
    <Navbar></Navbar>
        <Routes>
          <Route  path="/Home" element ={<Home />} />
          <Route  path="/Services" element ={<Services />} />
          <Route  path="/CreateAccount" element={<CreateAccount />} />
        </Routes>
   
    </>
    
  );
}

export default App;
