import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../Components/Footer';
import { ToastContainer, toast } from 'react-toastify';
export const Shop = () => {
  const [shopproduct, setShopproduct] = useState([]);
  const navigate = useNavigate();
  // To Show All Products On Shop Page
  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) => {
      setShopproduct(res.data)
    })
  })
 // Condition To Check Whetherthe  data is in Local Storage or Not
  const [cartData, setCartData] = useState(() => {
    let data = localStorage.getItem("cart-data");
    if (data != null) {
      return JSON.parse(data);
    }
    else {
      return [];
    }
  })
  // To Add Products Into The Cart
  const addtoCart = (items) => {
    let matchedData = cartData.filter((elements) => {
      return elements.id == items.id;
    })
    if (matchedData.length > 0) {
      alert("Product Already Exist");
    }
    else {
      setCartData([...cartData, items])
      toast.success("Product Added Into Cart")
    }
  }
  // To Set The Data Into The Local Storage
  useEffect(() => {
    localStorage.setItem("cart-data", JSON.stringify(cartData))
  })
  return (
    <>
      <div className="container-fluid mt-2 pt-4">
        <ToastContainer />
        <h2 className='text-center mt-5 '>All Products</h2>
        <div className="row">{
          shopproduct.map((items, index) => {
            return (
              <div className="col-sm-3" key={index}>
                <div className="card mt-4 p-3 bg-light" >
                  <img src={items.image} className="card-img-top" alt="..." style={{ height: "250px" }} />
                  <div className="card-body">
                    <h5 className="card-title  ">{items.category}</h5>
                    <h6 className="card-subtitle mb-3 ">Price : {items.price}</h6>
                    <button onClick={() => navigate(`/view/${items.id}`)} className='btn btn-warning me-3 btn-sm' id='view-btn'>View Details</button>
                    <button onClick={() => addtoCart(items)} className='btn btn-primary btn-sm'>Add To Cart</button>
                  </div>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
      <Footer />
    </>
  )
}
