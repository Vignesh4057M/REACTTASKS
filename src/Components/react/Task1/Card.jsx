import React from 'react'
import '../Task1/Card.css'

export default function Card(props) {
  return (
    <div className='course-card'>
        <img src={props.image} alt="" />
        <h3>{props.title}</h3>
        <p>{props.para}</p>
    </div>
  )
}
