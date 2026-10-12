import{useState,useEffect} from "react";

function expense(){
    const[addAmount,setAmount]=useState("");
    const[blaance,setBlance] = useState(0);
    const[inputVal,setInputVal]= useState({
        product:"",
        amount:"",
    })

    const [expenseData,setExpenseData] = useState([]);

    const addAmountFun  = ()=>{
        setBlance(addAmount)
        setAmount("")
     
    }

    const handleChange = (e)=>{
        const{name,value}=e.target;
        setInputVal({

        })
    }

 setExpenseData([...expenseData,{product:inputVal.product,amount:inputVal.amount}])
 setBlance(Number(blance)-Number(inputVal.amount))
} else {
    
    alert("Indsuffient balance")


}



    return

    <div>
        <h2>Expensive tracker</h2>
        <h2>Balance:{blance}</h2>
        <input type = "number" value = {addAmount}
        onchange={(e)=> setAmount(e.target.value)}/>
        <button onclick = {addamountFun}>Add Amount</button>

        <div> <hr></hr>
            <h2>add amount</h2>
            <input type = "number"placeholder="enter amount"/>
            <buttom>Add amount</buttom>
            <hr/>
        </div>
    </div>

export default expense ;
