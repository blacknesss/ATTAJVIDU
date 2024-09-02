import React, { useRef } from 'react'

function TajComponent({item}) {
  
  return (
    <div className="taj-block">
        <h1 className="roolName">{item.roolName}</h1>
        <span className="separate"></span>
        <span className="fsb">{item.sign}</span>
        <p className="rool">{item.rool}</p>
        <span className="separate"></span>
        <p className="example">
            <span>{item.example.span1}</span>
            <span>{item.example.span2}</span>
            <span>{item.example.span3}</span>
        </p>
    </div>
  )
}

export default TajComponent
