import{useState,useEffect} from "react";

 function Clock(){ 
    const [timerval,settimerval]= useState(new Date());
    useEffect(()=>{
        const interval = setInterval(()=>{
             settimerval(new Date())

        },1000)
        return()=>clearInterval(interval)

    },[])
    return(
        <div>
            <h2>Digital Clock</h2>
            <h2>{timerval.toLocaleTimeString()}</h2>
            <h2>{timerval.toLocaleDateString()}</h2>

        </div>

    )
    }


 

    export default Clock;




4

       


