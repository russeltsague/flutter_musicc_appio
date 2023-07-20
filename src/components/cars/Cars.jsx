import React from "react";
// import "./our-member.css"
import { Link } from "react-router-dom";
import img from "./cars-img/nissan-offer.png";
import carData from "./carData";
import Heading from "../common/Heading";


import Back from "../common/Back"; 
import "./recent.css"
import RecentCard from "./RecentCard"



const Cars = () => {
  return (
    <section >
    <Back name='About Us' title='About Us - Who We Are?' cover={img} />
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
            {/* <Car/> */}
      <div className='content grid3 mtop'>
      {carData.map((item, index) => (
        <div  key={index} className="box shadow cars">
          <div className="single__member">
            <div className="single__member-img img">
              <img src={item.imgUrl} alt=""  />
            </div>
            <div className="name">
              <h1>{item.carName}/{item.model}</h1>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{item.price}</button> <label htmlFor=''>/sqft</label>
                </div>
                <span>{item.brand}</span>
              </div>
              </div>
             

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </div>
      ))}
    </div>  
  
        
     
    </section>
  );
};

export default Cars;
