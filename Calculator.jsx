import React,{useState , useEffect} from "react";

const Calculator = () => {

    const [num1 , setNum1] =useState(0);
    const [num2 , setNum2] =useState(0);
    const [cal , setCal] =useState(0);

    
    useEffect (() => {
      setCal(num1 + num2);
    }, [num1, num2]);

 
return ( <div>
<h2>Calculator</h2>
<div> <label> Num 1:
  <input type = "number" value={num1} onChange={(e)=> setNum1(Number(e.target.value))}/>
  </label></div>

<div> <label> Num 2:
 <input type="number" value={num2} onChange={(e)=> setNum2(Number(e.target.value))}/>
  </label></div>
  <div> <h3>Ans: {cal} </h3></div>
</div>

);

};

export default  Calculator ;