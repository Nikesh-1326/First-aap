import {useState,useEffect } from "react"


function User(){
     const[data,setData] = useState([])


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then((data)=> setData(data))


    },[]
        
    )
    

    return(

     <div>
        {
            data.map((val) => {
                return <ul key={val.id}>
                      
                      <li>{val.name}</li>
                </ul>
            })
        }
     </div>
    )

}

export default User;


