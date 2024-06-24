import React from 'react'
import './Chefs.css'
import Icon from './Icon'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'

function ChefCard({imgSrc,name,jobRank}) {
  return (
    <>
      <div className="chef-card">
        <img src={imgSrc} alt="" />
        <div className="about">
            <h3>{name}</h3>
            <p>{jobRank}</p>
            <hr />
            <div className="social-links">
                <Icon  imgSrc={facebook}/>
                <Icon imgSrc={instagram}/>
                <Icon imgSrc={twitter}/>
                <Icon imgSrc={linkedin}/>
            </div>
        </div>
      </div>
    </>
  )
}

export default ChefCard
