import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
//This Componenet Is Made to make Code Reusable 
//Global Solution
export const ViewProductDetails = () => {
  const navigate = useNavigate();
  const sid = useParams();
  useEffect(()=>{
    navigate(`/single-product/${sid.rid}`)
  })
  return (
   <>
   </>
  )
}
