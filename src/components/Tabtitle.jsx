import {useState,useEffect } from "react"


function Tabtitle() {
    const[count,setCount]= useState(0)
     useEffect(()=>{
        Document.title =`count: ${count}`
     },[count])


     return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={()=> setCount(count+1)}>Increment</button>

        </div>

     )

}
export default Tabtitle