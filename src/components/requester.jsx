import React from 'react'
import Card from './card'
import './css/card.css'
import ReqList from './requesterlist'


function requester (props)
{   
  const REQL = ReqList
    return <div className='row'>
    {
    REQL.map((requester) => 
    <  Card 
    key = {requester.key}
    avatar = {requester.avatar}
    name = {requester.name}
    Disc = {requester.discription}
  />
)}
    
    </div>
}

export default requester