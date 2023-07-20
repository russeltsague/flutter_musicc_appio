import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"
import { Link } from "react-router-dom/cjs/react-router-dom"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <Link to ='/contact'>
            <button className='btn5'>Contact Us Today</button>
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
               <img src='../images/logo.png' alt='' /> 
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>


          <div className='grid7'>
          {footer.map((val) => (
            <div className='box '>
              <h3 className='hover'>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li className='hover'> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
          </div>
        
      </footer>
      <div className='legal'>
        <span>© code and design by LeRuss and Christ Leonel.</span>
        <a href="#home" className="up" >
        <i className="fa-solid fa-arrow-up  "></i>
        </a>
      </div>
     
      
    </>
  )
}

export default Footer
