import React from 'react'
import About from './About'

const Basic = () => {

  const myCard=[

    {
      myName:"samiksha",
      myAge:"27",
      myCity:"Chnneai"
    },
    
    {
      myName:"riya",
      myAge:"26",
      myCity:"Delhi"
    },
    
    {
      myName:"aman",
      myAge:"28",
      myCity:"ranchi"
    },
  ]
  
  return (
    <div>
     Main home page 
      <About card={myCard} />
    </div>
  )
}

export default Basic
