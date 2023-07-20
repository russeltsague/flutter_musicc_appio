import React from 'react'
import img from './toyota-offer-2.png'
import './car.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Car = () => {
  return (
    <div className=' car'>
        <img src={img} alt="" />
        <div>
            <h1>Nimmo Auto provide also other services</h1>
            <Link to='./pricing'>
            <button>Become a Driver</button>
            </Link>
        </div>
    </div>
  )
}

export default Car