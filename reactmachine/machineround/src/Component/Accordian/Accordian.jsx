import React,{useState} from 'react'

const Accordian = () => {
    const [currentIndex,setcurrentIndex]=useState(null)
    let myContent = [
        {
            title: "title One",
            content: "hello this is my content"
        },
        {
            title: "title two",
            content: "hello this is my content"
        },
        {
            title: "title three",
            content: "hello this is my content"
        },
    ]


    function handleArrow(index){
      console.log("hello")
      setcurrentIndex(currentIndex==index ?null :index)
    }

    return (
        <div>
            accordian

            {
              myContent.map((item,index) => {
                    return (
                        <div key={index}>
                            <h3>{item.title} <span onClick={()=>handleArrow(index)}>arrow</span></h3>
                           {
                            currentIndex===index &&  <h4>{item.content}</h4>
                           }
                           
                        </div>

                    )
                })
            }

        </div>
    )
}

export default Accordian
