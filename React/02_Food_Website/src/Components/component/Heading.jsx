import React from 'react'
import './Heading.css'

export default function Heading({title}) {
  return (
    <>
      <h1 className='heading padding-bottom'>{title}</h1>
      <hr />
    </>
  )
}
