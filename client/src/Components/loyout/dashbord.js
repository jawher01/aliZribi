import React from 'react'
import { Carousel } from 'react-bootstrap';
import Foo from "./footer"
import Nav from "./navbar"
const dashbord = () => {
  return (
    <div>
     
    <Nav/>
    <Carousel  style={{marginTop:"5%" ,marginLeft:"20%",marginRight:"20%"}}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://formationtunis.tn/wp-content/uploads/2019/12/formation-tunisie-sans-bac-768x389.png"
        alt="First slide"
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.focusrh.com/sites/default/files/styles/content/public/news/centre-de-formation.png?itok=V5YIPSXK"
        alt="Second slide"
      />
  
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQsXX-gwImFv0GYw2cnX73JNRGTQ0ij4At_FlDTvfvGSJLdITewrvFBg1Rld7H2GAfEU&usqp=CAU"
        alt="Third slide"
      />
  
    
    </Carousel.Item>
  </Carousel>
  <Foo />
    </div>
  )
}

export default dashbord