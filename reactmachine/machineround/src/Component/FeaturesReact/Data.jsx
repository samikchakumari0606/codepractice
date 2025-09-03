import React,{useState,useEffect} from 'react'

const Data = () => {
    const[myData,setData]=useState([])
    const[currentpageNumber,setCuurrentpageNumber]=useState(0)

   async function fetchData(){
       let res=await fetch('https://dummyjson.com/products?limit=500');
       let data=await res.json();
       console.log(data.products)
       setData(data.products)

    }
    fetchData()

    let page_Size=10;
    let totalProduct=myData.length;
    let start=currentpageNumber*page_Size;
    let end=start+page_Size


    function handlePage(pagenum){
        setCuurrentpageNumber(pagenum)
    }

    function prevPage(){
        setCuurrentpageNumber((prev)=>prev-1)
    }

      function nextPage(){
        setCuurrentpageNumber((prev)=>prev+1)
    }

   
  return (
    <div>
        <button onClick={prevPage}>prev</button>
        <button onClick={nextPage}>next</button>
        {
            [...Array(totalProduct).keys()].map((pagenum)=><span onClick={()=>handlePage(pagenum)}>{pagenum}</span>)
        }
      <h1>
        {
            myData.slice(start,end).map((item,id)=>{
                return (
                    <div  key={id}>
                        <h6>{item.title}</h6>
                        {/* <h4>{item.description}</h4> */}
                        <img style={{height:"100px"}} src={item.images} alt="myImges"/>
                    </div>
                )
            })
        }
      </h1>
    </div>
  )
}

export default Data
