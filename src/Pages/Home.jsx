import React, { useEffect, useState } from 'react'
import { Banner } from './Banner'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../Components/Footer';
import { ToastContainer, toast } from 'react-toastify';
export const Home = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const [cartData, setCartData] = useState(() => {
      // Condition To Check Whetherthe  data is in Local Storage or Not
    let data = localStorage.getItem("cart-data");
    if (data != null) {
      return JSON.parse(data);
    }
    else {
      return [];
    }
  })
//To Show Products On Landing Page
  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) => {
      setProduct(res.data)
    })
  })
  //To Add Products Into The Cart
  const addtoCart = (items) => {
    let matchedData = cartData.filter((elements) => {
      return elements.id == items.id;
    })
    if (matchedData.length>0) {
      alert("Product Already Exist");
    }
    else {
      setCartData([...cartData, items])
    toast.success("Product  Added Into Cart",{
      position:"top-center",
      autoClose: 2000,
    })
    }
  }
  //To Set The Data Into Local Storage
  useEffect(() => {
    localStorage.setItem("cart-data", JSON.stringify(cartData))
  }, [cartData])

  return (
    <>
      <Banner />
      <div className="container-fluid mt-4">
        <ToastContainer/>
        <h1 className='text-center'>Our Latest Products</h1>
        <div className="row">{
          product.slice(0, 8).map((items, index) => {
            return (
              <div className="col-sm-3" key={index}>
                <div className="card mt-4" >
                  <div className="card-image">
                    <img src={items.image} className="card-img-top img-fluid" alt="..." style={{ height: "250px" }} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title mb-3">{items.category}</h5>
                    <h6 className="card-subtitle mb-3 ">Price : {items.price}</h6>
                    <button onClick={() => navigate(`/view/${items.id}`)} className=' btn btn-primary  me-3 btn-sm' id='view-btn'>View Details</button>
                    <button onClick={() => addtoCart(items)} className='btn btn-warning  btn-sm'>Add To Cart</button>
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
