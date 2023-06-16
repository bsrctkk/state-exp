import React, { useState } from 'react'

export default function InputMultiplication() {

    const [number1,setnumber1] = useState('');
    const [number2, setnumber2]=useState('');
    const [result, setresult]=useState('');

    const num1=(e)=>{
        setnumber1(e.target.value);
    };
    const num2=(e)=>{
        setnumber2(e.target.value);
    };

    const multiplication=()=> {
        const res = Number(number1) * Number(number2);
        setresult(res);
    }
  return (<>
    <div>
    <input type='number' value={number1} onChange={num1}/>
    <input type='number' value={number2} onChange={num2}/>
    <button onClick={multiplication}>Calculate</button>
    </div>
    <div>
    <label>Resul: <span>{result}</span></label> 
    </div>
    </>
  )
}