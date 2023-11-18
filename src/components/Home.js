import React from 'react'
import { Product, Products } from './Products'

export const Home = () => {
  return (
    <div className='main_img'>
<div class="card bg-dark text-white border-0">

  <img src="https://img.freepik.com/free-photo/studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look_273443-10.jpg?w=2000" class="card-img" alt="Background" height="550px"/>
  <div class="card-img-overlay">

    <div className='container'>
    <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVELS</h5>
    <p class="card-text fs-2">CHECK OUT ALL THE TRENDS</p>
    </div>

  </div>
</div>
<Products/>
    </div>
  )
}
