import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import Testimonial from "./testimonial/Testimonial"
import Car from "./car/Car"

const Home = () => {
  return (
    <>
      <Hero />
      
      
      <Featured />
      <Recent />
      <Awards />
      <Location />
      <Team />
      <Car/>
      <Testimonial/>
      
    </>
  )
}

export default Home
