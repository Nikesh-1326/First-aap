import React, { useState } from 'react';


function Add() {
   const [num1, setNum1] = useState("0");
   const [num2, setNum2] = useState("0");
   const [sum, setSum] = useState(0);
        console.log(num1, num2);
        console.log(input1, "input");
        console.log(typeof sum);
        console.log(sum);

  return (
    <div>
      <h1>Add two user input num</h1>
    <div>
        input type = "text" value = {}
        </div>
        <div>
           <input type = "text" value = {num1} onChange={(e) => setNum1(e.target.value)} />
           <input type = "text" value = {num2} onChange={(e) => setNum2(e.target.value)} />
           <button onClick={() => setSum(parseInt(num1) + parseInt(num2))}>Add</button>
           <p>Sum: {sum}</p>
        </div>
      </div>
  )
}

export default Add;


