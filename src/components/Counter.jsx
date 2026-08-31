import{useState} from "react";

function Counter() {
const [count, setCount] = useState(0);
const CounterFun = () => {
    setCount(count + 1);
    }
      return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={CounterFun}>Counter+</button>
            <button onClick={() => setCount(count - 1)}>-Decrement</button>
        </div>
      )

   



  
}
export default Counter;