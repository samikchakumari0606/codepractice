import React from 'react'

const About = ({card}) => {
  console.log(card)
  return (
    <div>
      <div>
    {
      card.map((item,i)=>{
        return (
          <div key={i}>
            <h3>username :{item.myName}</h3>
            <h3>userage:{item.myAge}</h3>
            <h3>userCity:{item.myCity}</h3>
          </div>
        )
      })
    }
      </div>
    </div>
  )
}

export default About
