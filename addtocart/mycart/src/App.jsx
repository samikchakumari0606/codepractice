import Cart from "./Component/Cart"
import {useState} from "react"

function App() {

  const[category,setCategory]=useState("All")

  return (
    <>
      <Cart category={category} />
    </>
  )
}

export default App
