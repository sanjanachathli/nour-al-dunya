import React from 'react'
import ServiceCard from './ServiceCard';
import {Col} from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const ServicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Plan your travels with confidence, knowing essential details like temperature, humidity, wind speed, and precipitation."
    },

    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Our tour guides are passionate locals who will show you the best of our city.Our tour guides makes you feel like a local"
    },

    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Tailor your experience to your unique needs and preferences.Customize to make it your own."
    }
]

const ServiceList = () => {
  return <>
  {
    ServicesData.map((item,index)=> 
    <Col lg='3' key={index}>
        <ServiceCard item = {item}/>
    </Col>
    )
  }
  </>
};

export default ServiceList