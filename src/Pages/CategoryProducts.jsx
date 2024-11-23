import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Footer } from '../Components/Footer';
import { ToastContainer, toast } from 'react-toastify';
export const CategoryProducts = () => {
  const navigate = useNavigate();
  let mid = useParams();
  const [categoryData, setCategoryData] = useState([]); 
  //To show Categories product
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${mid.did}`).then((res) => {
      setCategoryData(res.data)
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
//To Add the Product Into The Cart
  const addtoCart = (items) => {
    let matchedData = cartData.filter((elements) => {
      return elements.id == items.id;
    })
    if (matchedData.length>0) {
      alert("Product Already Exist");
    }
    else {
      setCartData([...cartData, items])
    toast.success("Product Added Into Cart")
    }
  }
  //To Set The data Into Local Storage
  useEffect(() => {
    localStorage.setItem("cart-data", JSON.stringify(cartData))
  }, [cartData])
  return (
    <>
    <div className="container-fluid mt-5">
      <ToastContainer/>
      <h3 className='head p-3 text-center mt-5 pt-4'>{mid.did.toUpperCase()}</h3>
      <div className="row ">{
        categoryData.map((items, index) => {
          return (
            <>
              <div className="col-sm-3" key={index}>
                <div className="card mt-4 p-3 bg-light" >
                  <img src={items.image} className="card-img-top" alt="..." style={{ height: "250px" }} />
                  <div className="card-body">
                    <h5 className="card-title mb-3">{items.category}</h5>
                    <h6 className="card-subtitle mb-3 ">Price : {items.price}</h6>
                    <button  onClick={() => navigate(`/view/${items.id}`)} className='btn btn-success me-3 btn-sm' id='view-btn'>View Details</button>
                    <button onClick={() => addtoCart(items)} className='btn btn-dark btn-sm'>Add To Cart</button>
                  </div>
                </div>
              </div>
            </>
          )
        })
      }
      </div>
    </div>
    <Footer/>
    </>
  )
}
