import{useState,usEffect, useEffect}from 'react';


function UserLis(){ 
        const[users,setusers]=useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data)=> setuser(data))
    },[])


    return(
        <ul>
            {user.map(user=> (
                <li key ={user.id}>{user.name}</li>
            ))}
        </ul>
    );

}