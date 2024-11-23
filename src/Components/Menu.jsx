import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export const Menu = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  // To Show Categories Into Navbar
  useEffect(() => {
    axios("https://fakestoreapi.com/products/categories").then((res) => {
      setCategory(res.data);
    })
  })
  // Category Data
  const categoryData = (cid) => {
    navigate(`/category-products/${cid}`)
  }


  // To Show Cart Count
  const [cartCount, setCartCount] = useState();
  useEffect(() => {
    let data = localStorage.getItem("cart-data");
    if (data != null) {
      let arr = JSON.parse(data);
      setCartCount(arr.length);
    }
  })
  return (
    <nav className="navbar navbar-expand-lg fixed-top " id='menu'>
      <div className="container">
        <Link className="navbar-brand ms-2" to={'/'}><h4>Shopping App</h4></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto me-2">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"} >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/shop"}>Shop</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Category
              </a>
              <ul className="dropdown-menu  " aria-labelledby="navbarDropdownMenuLink">
                {category.map((items, index) => {
                  return (
                    <li key={index}>
                      <a onClick={() => categoryData(items)} className="dropdown-item" href="#">{items}</a>
                    </li>
                  )
                })}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/cart"} >Cart<sup className='ms-1 c-count'><b>{cartCount}</b></sup></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
