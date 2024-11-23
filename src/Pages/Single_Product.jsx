import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
export const Single_Product = () => {
  const [singleData, setSingleData] = useState({});
  let xid = useParams();
  //To Show Single Product On page
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${xid.uid}`).then((res) => {
      setSingleData(res.data);
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
      toast.success("Product Succefully Added Into Cart")
    }
  }
  // To Set The Data Into The Local Storage
  useEffect(() => {
    localStorage.setItem("cart-data", JSON.stringify(cartData))
  })
  return (
    <div className='container '>
      <ToastContainer />
      <div className="row mt-5">
        <div className="col-sm-4 mt-5 ">
          <img src={singleData.image} alt="" className='img-fluid' style={{ height: "400px" }} />
        </div>
        <div className="col-sm-8 mt-5">
          <div className="card bg-light p-3">
            <h2> {singleData.title}</h2>
            <h5 className='pt-2 pb-3'>{singleData.category}</h5>
            <h4 className='pt-1 pb-2' style={{ color: "red" }}>Price : {singleData.price}</h4>
            <p className='mt-3 mb-4'>{singleData.description}</p>
            <p >Rating: {singleData.rating ? singleData.rating.rate : ""}</p>
            <div className='mt-2'>
              <button onClick={() => addtoCart(singleData)} className='btn btn-success'>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
