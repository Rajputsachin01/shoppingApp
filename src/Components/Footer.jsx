import React, { useEffect, useState } from 'react'
import { FaTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
export const Footer = () => {
    const [fcategory, setFCategory] = useState([]);
    const navigate = useNavigate();
    //To Show Categories Into Footer
    useEffect(() => {
        axios("https://fakestoreapi.com/products/categories").then((res) => {
            setFCategory(res.data);
        })
    })
    // Category Data
    const categoryData = (cid) => {
        navigate(`/category-products/${cid}`)
    }
    return (
        <div id='footer' className='mt-4'>
            <div className="container">
                <div className="row pt-3">
                    <div className="col-sm-3">
                        <h2 className='mt-3 mb-4 f-head '>Shopping App</h2>
                        <p className='mt-2 ' id='footer-para'>Suspendisse varius enim in eros elementum tristique. Duis
                            cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                        <div className='mt-4'>
                            <a className=' me-2' href=""><FaTwitter id='icon' /></a>
                            <a className='ms-2 me-2' href=""><FaFacebookF id='icon' /></a>
                            <a className='ms-2 me-2' href=""><FaPinterestP id='icon' /></a>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <h2 className='mt-3 mb-4 f-head ms-4 '>Quick links</h2>
                        <ul id='f-link'>
                            <li className="list-item"><Link to={"/"}>Home</Link></li>
                            <li className="list-item"><Link to={"/shop"}>Shop</Link></li>
                            <li className="list-item"><Link to={"/"}>Main</Link></li>
                            <li className="list-item"><Link to={"/"}>Cart</Link></li>
                            <li className="list-item"><Link to={"/"}>Privacy Policy</Link> </li>
                        </ul>
                    </div>
                    <div className="col-sm-3 ">
                        <h2 className='mt-3 mb-4 f-head ms-4 '>Shop Category</h2>
                        <ul id='f-link'>
                            {fcategory.map((items, index) => {
                                return (
                                    <li className="list-item" key={index}>
                                        <a onClick={() => categoryData(items)} href="#">{items.toUpperCase()}</a>
                                    </li>)
                            })}
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h2 className='mt-3 mb-4 f-head ms-4'>Get In Touch</h2>
                        <ul id='f-link'>
                            <li className="list-item"><a href="">(89) 982-278 356</a></li>
                            <li className="list-item"><a href="">demo@colorlib.com</a></li>
                            <li className="list-item"><a href="">67/A, Colorlib, Green<br />
                                road, NYC</a></li>
                        </ul>
                    </div>
                    <p className='p-2 mt-5 text-center f-copyright'>Copyright ©2024 All rights reserved | This Website is made with  by Sachin Rajput</p>
                </div>
            </div>
        </div>
    )
}





