import React, { useEffect, useState } from 'react'

const ApiUseEffect = () => {

    const [api, setApiData] = useState([])


    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://api.example.com/products");
            const data = await res.json();
            console.log(data)
            setApiData(data)
        }
        fetchData();
    }, []); // Empty dependency = run once on mount


    return (
        <div>
      {
        api.map((item)=>{
            return(
                <div key={item.id}>
                    <h3>{item.title}</h3>
                </div>
            )
        })
      }
        </div>
    )
}

export default ApiUseEffect
