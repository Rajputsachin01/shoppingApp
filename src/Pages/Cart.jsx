import React, { useEffect, useState } from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
export const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);
  //To show Total Amount of Cart Products
  useEffect(() => {
    let data = localStorage.getItem("cart-data");
    if (data != null) {
      let parsedData = JSON.parse(data);
      setCartProducts(parsedData);
      let totalAmount = parsedData.reduce((total, item) => total + item.price, 0);
      setCartAmount(totalAmount);
    }
  }, [cartProducts]);
  // To Delete Cart Data
  const deleteCart = (did) => {
    let data = localStorage.getItem("cart-data");
    if (data != null) {
      let parsecart = JSON.parse(data);
      let deletearr = parsecart.filter((items) => {
        return items.id != did;
      })
      if (window.confirm("are you sure to delete")) {
        setCartProducts(deletearr)
        localStorage.setItem("cart-data", JSON.stringify(deletearr));
      } else {
        window.location.reload();
      }
    }
  }
  // quntity increasing at evry product on single increment
  // const [quantity, setQuantity] = useState(1);

  // const increment = () => {
  //   setQuantity(quantity + 1);
  // };

  // const decrement = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };
  return (
    <>
      <section className='mt-5'>
        <div className="container">
          <div className="row ">
            <h2 className=" text-dark text-uppercase mt-5">Cart Products</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Price</th>
                  {/* <th>Quantity</th> */}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="cart-items">
                {cartProducts.map((items, index) => {
                  return (
                    <tr key={index}>
                      <td><img className='img-fluid p-2 ' src={items.image} style={{ height: "150px", width: "150px" }} alt="" /></td>
                      <td className='mt-4'><h6>{items.title}</h6></td>
                      <td id='c-price'> $ {items.price}</td>
                      {/* <td><button onClick={decrement} className='btn btn-secondary btn-sm q-btn'>-</button>
                       <span> <b>{quantity}&nbsp;</b></span>
                        <button onClick={increment}  className=' btn btn-secondary  btn-sm q-btn'>+</button></td> */}
                      <td><IoIosRemoveCircleOutline className='remove'
                        onClick={() => deleteCart(items.id)} style={{ color: "red" }} /></td>
                    </tr>
                  )
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td  >
                    <strong> Total:$ <span id='t-price'>{cartAmount}</span></strong>
                    </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
