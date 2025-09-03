import React,{useState} from 'react'

const Prop = ({myname,myCompany,myArr}) => {
  return (
    <div>
      <h1>{myname}</h1>
      <h3>{myCompany.company}</h3>
      {
        myArr.map((item)=>{
            return(
                <>
                <h1>{item}</h1>
                </>
            )
        })
      }
    </div>
  )
}

export default Prop
