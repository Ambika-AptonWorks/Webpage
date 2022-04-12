import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Menucard from './components/pages/Menucard'
import CreateAccount from './components/pages/CreateAccount';
import Products from './components/pages/Products';
import Message from './components/Message';


function App() {
  return (
    <>
    <Navbar></Navbar>
        <Routes>
          <Route  path="/" element ={<Home />} />
          <Route  path="/Menucard" element ={<Menucard />} />
          <Route  path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Message" element={<Message />} />
        </Routes>
   
    </>
    
  );
}

export default App;
