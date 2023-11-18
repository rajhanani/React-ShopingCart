import React from 'react'
import { Product } from './Products'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Nav = () => {

  const start = useSelector( (start)=>start.handlecart)
  return (
    <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light py-3 bg-white shadow-sm">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to='/'>Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/products">Product</NavLink>
        </li>
       
        <li class="nav-item">
          <NavLink class="nav-link " to="/about" >About</NavLink>
        </li>

      </ul>
      <div className='buttons'>
      <NavLink to="/login" className="btn btn-outline-dark ms-3" href="#">Login</NavLink>
      <NavLink to="/login" className="btn btn-outline-dark ms-3" href="#">Register</NavLink>
      <NavLink to="/login" className="btn btn-outline-dark ms-3" href="#">Cart({start.length})</NavLink>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}
