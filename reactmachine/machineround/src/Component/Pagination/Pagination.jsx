import React,{useState} from 'react'

const Pagination = () => {
    const[product,setProduct]=useState([])
    const[currentPage,setCurrentPage]=useState(0)

  async  function handleFetchData(){
      let res=await fetch('https://dummyjson.com/products?limit=200')
      let data=await res.json();
      console.log(data.products)
      setProduct(data.products)
    }
    handleFetchData()

    let PAGE_SIZE=10;
    const totalProduct=product.length;
    const totalNumberOfPage=Math.ceil(totalProduct/PAGE_SIZE);
    const start=currentPage*PAGE_SIZE;
    const end=start+PAGE_SIZE


    function handlePageNumber(pagenum){
      setCurrentPage(pagenum)
    }

    function handlePrev(){
      setCurrentPage((prev)=>prev-1)
    }

  function handleNext(){
    setCurrentPage((prev)=>prev+1)
  }


  return (
    <div>
      <span onClick={handlePrev}>prev page</span>
     {
      [...Array(totalNumberOfPage).keys()].map((pagenum)=>(<span onClick={()=>handlePageNumber(pagenum)}>{pagenum}</span>))
     }

     <span onClick={handleNext}>next page</span>

      <div>
          {
            product.slice(start,end).map((item,i)=>{
              return (
                <div key={i}>
                  <h1>{item.title}</h1>
                </div>
              )
            })
          }
      </div>
    
      
    </div>
  )
}

export default Pagination
