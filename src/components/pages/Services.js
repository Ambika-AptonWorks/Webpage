import React from 'react'
import {Link} from "react-router-dom"
import Searchbar from './Searchbar'

export default function Services() {
  return (
    <>
    <Link to="/Services"></Link>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Services</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle " href="#"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" 
          aria-expanded="false">Dropdown</a>
          <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
       
      </form>
    </div>
  </div>
</nav>
<p id="Home">In recent years, banks have become scared and are asking their clients to cut their debts owed to them.  What does that mean? This means that companies like our clients have had to put more money into paying back their debt and this creates a crunch not just on the working capital but it also means they are not able to expand, go after new business ventures, hire new employees, or invest in research and development (R&D).
We understand this and we can offer financial relief by helping our clients refinance their existing business debts (whether commercial or industrial).</p>
    </>
  )
}
