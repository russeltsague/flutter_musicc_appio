import React from "react"
import { list } from "../../data/Data"

const RecentCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type, icon, desc } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
                </div>
                <div className="description1">
                <p>{desc}</p>
                <a href="">{icon}</a>
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span className="span" style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                  <div class="small">
                      <small class="flex-fill text-center border-end py-2"
                        ><i
                          class="fa fa-ruler-combined text-orange-500 me-2"
                        ></i>1000 Sqft</small
                      >
                      <small class="flex-fill text-center border-end py-2"
                        ><i class="fa fa-bed text-orange-500 me-2"></i>3
                        Bed</small
                      >
                      <small class="flex-fill text-center py-2"
                        ><i class="fa fa-bath text-orange-500 me-2"></i>2
                        Bath</small
                      >
                    </div>
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        })}
        
      </div>
    </>
  )
}

export default RecentCard
