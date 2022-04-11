import React,{useState} from 'react'
import { Link } from "react-router-dom"
import './Menucard.css'
import Menu from './Menu'
import * as BsIcon from 'react-icons/bs'
import * as FaIcon from 'react-icons/fa'

export default function Menucard() {
  const[items,setItems]=useState(Menu)

  const Filterfood=(storing)=>{
    const fooditems=Menu.filter((currentfood)=>{
      return currentfood.category===storing
    });
    setItems(fooditems)
  }
  return (
    <>
      <Link to="/Menucard"></Link>

      <div className='content  d-flex justify-content-center'>
      <h1 className='text-info text-center'>Pick your order</h1>
          <div className='header '>
            <i className='icon1 mx-1'><BsIcon.BsInstagram /> </i>
            <i className='icon2 mx-1'><BsIcon.BsWhatsapp /></i>
            <i className='icon3'><FaIcon.FaFacebookF/></i>
          </div>
      </div>
      <hr />
      <div className='row-container d-flex justify-content-center menu-title'>
        <div className='menu-buttons mb-11 d-flex justify-content-center'>
          <button className='btn btn-warning mx-1' onClick={()=>Filterfood('breakfast')}>Breakfast</button>
          <button className='btn btn-warning mx-1' onClick={()=>Filterfood('lunch')}>Lunch</button>
          <button className='btn btn-warning mx-1' onClick={()=>Filterfood('evening')}>Snacks</button>
          <button className='btn btn-warning mx-1' onClick={()=>Filterfood('dinner')}>Dinner</button>
          <button className='btn btn-warning mx-1'  onClick={()=>setItems(Menu)}>All</button>
        </div>
      </div>
      <div className='row container-fluid'>
        {items.map((food)=>{
          const{id,name,img,price,category}=food;
          return(
            <div className='menu-card col-md-4'>
            <div class="card mb-3">
              <div class="row g-0">
                <div class=" menu-image col-md-4">
                  <img src={img} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className='d-flex justify-content-between'>
                    <p class="card-text">Price:{price}</p>
                    <a href="#">
                      <button className='btn btn-primary'>Order</button>
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          )
        })}
        <hr />
        <div className='footer mb-3'>
           <p >All rights are reserved &copy;</p>
        </div>
      </div>

    </>
  )
}
