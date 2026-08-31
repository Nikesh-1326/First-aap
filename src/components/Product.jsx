import React, { useState } from 'react';


function Product(){
    const [num1, setNum1] = useState("0");
    const [num2, setNum2] = useState("0");
    const [product, setProduct] = useState(0);
        
  return (
    <div>
      <h1>Multiply two user input num</h1>
    <div>
        input type = "text" value = {}
        </div>
        <div>
           <input type = "text" value = {num1} onChange={(e) => setNum1(e.target.value)} />
           <input type = "text" value = {num2} onChange={(e) => setNum2(e.target.value)} />
           
           <button onClick={() => setProduct(parseInt(num1) * parseInt(num2))}>Multiply</button>
           <p>Product: {product}</p>
        </div>
      </div>
  )
}

export default Product;