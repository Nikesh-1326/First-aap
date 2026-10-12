import { useRef,useState } from "react";


function Stopwatch(){
    const [count,setcount] = useState(0);
    // const intervalRef = useRef(0);
    const handleStart = ()=>{
        const interval = setInterval(()=>{
            setcount((rev) => rev+1)

        },1000)

    
    }



    const handleStop = () =>{
        clearInterval(interval)

    }

    return(
        <div>
            <h2>Stop watch</h2>
            <h2>Count:{count}</h2>
            <button onclick={handleStart}start button>
            <
        </div>
    )
}