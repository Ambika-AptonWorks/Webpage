import React,{useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import  { sidebarData } from './Sidebar'
import './Navbar.css'
import {IconContext} from'react-icons';

function Navbar() {
  const[sidebar,setSideBar]=useState(false)
  const showbar=()=>setSideBar(!sidebar)
  return (
    <div>
    <IconContext.Provider value={{color:'white'}}>
    <div className="navbar"> 
      <div className='nav-bar'>
        <Link to="/" className='Link-page'>
          < FaIcons.FaBars onClick={showbar}/>
        </Link>
      </div>
    </div>
    
        <div className={sidebar? 'nav-menu active':'nav-menu'} >
          <ul className='nav-items' onClick={showbar}>
            <li className='nav-toggle'>
              <Link to="#" className='menu-bar'>
                 <AiIcons.AiOutlineClose  />
              </Link>
            </li>
            {sidebarData.map((item,index)=>{
              return(
                <li key={index} className={item.className}>
                  <Link to={item.path}> {item.icon}
                  <span>{item.title}</span></Link>
                </li>
              )
            })}
          </ul>
        </div>
        </IconContext.Provider>
    </div>
  )
}

export default Navbar
