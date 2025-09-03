import React from 'react'
import {useState} from "react"
import "./Progress.css"

const Progress = ({color}) => {

  return (
    <div>
        <div className='myDiv'>
                <div style={{width:`${color}%`,backgroundColor:"red"}} >{color}%</div>
        </div>
     
    </div>
  )
}

export default Progress
