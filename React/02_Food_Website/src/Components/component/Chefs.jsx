import React from 'react'
import './Chefs.css'
import Heading from './Heading'
import ChefCard from './ChefCard'
import ChefData from './ChefData'

function Chefs() {
  return (
    <>
      <div className="chef-container">
      <Heading className="heading" title={"expert chefs"}/>
      <div className="cards-container">
        {ChefData.map((element,index)=>{
          const{imgSrc,name,jobRank}=element
          return <ChefCard key={index} imgSrc={imgSrc} name={name} jobRank={jobRank}/>
        })}
      </div>
      </div>
    </>
  )
}

export default Chefs
