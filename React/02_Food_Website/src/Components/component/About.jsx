import React from 'react'
import './About.css'
import Heading from './Heading'
import about from '../assets/about.png'

export default function About() {
  return (
    <div className='padding'>
      <Heading title={"about us"}/>
      <div className="container padding">
        <div className="content">
            <h2>Lets satisfy your hunger with our tasty dishes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti sunt magnam vitae, quae odio harum quo itaque ipsa dolorem ipsam mollitia quibusdam praesentium at nihil voluptates! Expedita, id fuga! Fugiat quidem praesentium, tempora harum modi repellat ipsum reiciendis distinctio.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti sunt magnam vitae, quae odio harum quo itaque ipsa dolorem ipsam mollitia q.</p>
            <button className="btn">Learn More</button>
        </div>
        <div className="image">
            <img src={about} alt="" />
        </div>
      </div>
    </div>
  )
}
