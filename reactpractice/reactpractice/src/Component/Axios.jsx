import React, { useState, useEffect } from 'react'
import axios from "axios"

const Axios = () => {
    const [api, setApi] = useState([])



    // useEffect(() => {
    //     async function getData() {
    //         let res = await axios.get('https://fakestoreapi.com/products')
    //         setApi(res.data)
    //         console.log(res.data)
    //     }
    //     getData()
    // }, [])


    async function handlePost() {

        try {
            let res = await axios.post("https://fakestoreapi.com/products", {
                title: "new product",
                price: 23,
                description: "new produxt in market"
            })

            console.log(res.data)
            setApi(res.data)
        }
        catch (err) {
            console.log("err", err)
        }


    }

    async function handlePut() {

        try {
            let res = await axios.put("https://fakestoreapi.com/products/1", {
                title: " update new product"

            })

            console.log(res.data)
            setApi(res.data)
        }
        catch (err) {
            console.log("err", err)
        }


    }

    async function handleDelete() {

        try {
            let res = await axios.delete("https://fakestoreapi.com/products/1")
            console.log(res.data)
            setApi(res.data)
        }
        catch (err) {
            console.log("err", err)
        }


    }



    return (
        <div>

            {/* <h1>get data from axios </h1> 
            {
               api.map((i)=>{
                return(
                    <div key={i.id}>
                        <h3>{i.title}</h3>
                        
                    </div>
                )
               })
            } */}


            <button onClick={handlePost}>post data from axios</button>

            <button onClick={handlePut}>update data from axios</button>

            <button onClick={handleDelete}>delete data from axios</button>


        </div>
    )
}

export default Axios
