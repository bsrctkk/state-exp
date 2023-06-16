import React, { useState } from 'react'

export default function LiDelete() {

    

    const[name,setname]= useState([]);
    const[names, setnames]= useState('');
    
    const add=()=>{
        if(names !== '') {
            setname([...name,names]);
            setnames('');
        }
    }
    const deleteName = (index) => {
        const updatedNames = [...name];
        updatedNames.splice(index, 1);
        setname(updatedNames);
      };
  return (
    <>
    <div>
        <label>İsim Giriniz:</label>
        <input type='text' value={names} onChange={(e) => setnames(e.target.value)}/>
    </div>
    <div>
        <button onClick={add}>ADD</button>
    </div>
    <div>
        <ul>
            {
                name.map((item, index) =><li key={index} onClick={() => deleteName(index)}>{item}</li>)
            }
        </ul>
    </div>
    </>
  )
}