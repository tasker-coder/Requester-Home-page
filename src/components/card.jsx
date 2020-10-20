import React from 'react'
import './css/card.css'
function Card (props)
{
    return <div className='column'>
    <img src={props.avatar}  alt="reql"  />
    <h3>{props.name}</h3>
    <p>{props.Disc}</p>
    </div>
}

export default Card