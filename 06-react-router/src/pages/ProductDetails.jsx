import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

  const params = useParams();
  console.log(params)


  return (
    <div className='w-full h-[95vh] flex justify-center items-center'>
      <h1 className='text-7xl font-bold text-gray-800'>Product Details</h1>
    </div>
  )
}

export default ProductDetails
