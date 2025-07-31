import React from 'react'

const FCProps = ({name,obj,arr}) => {
  return (
    <div>
      <h3>{name}</h3>
      <h2>{obj.myName}</h2>
      {
        arr.map((item,index)=>{
          return <h2 key={index}>{item}</h2>
        })
      }
    </div>
  )
}

export default FCProps
