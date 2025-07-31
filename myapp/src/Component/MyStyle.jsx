import React from 'react'
import styles from "./newStyle.module.css"
import "./MyStyle.css";

const MyStyle = () => {
  return (
    <div>
      <h1 style={{color:"red"}}>hello</h1>

      <p className='one'>hii</p>
      <p className={styles.two}>module css</p>
    </div>
  )
}

export default MyStyle
