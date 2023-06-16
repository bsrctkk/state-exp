import React, { useState } from 'react'

export default function RandomNumber() {
    let numberData=[]
    const [number,setnumber]=useState(numberData)

    const addRandomNumber = () => {

        let nums=[];
        for(let i=1; i=6; i++)
        {const randomNum = Math.floor(Math.random() * 100);
            nums.push(randomNum);

        }
        console.log(number);
        setnumber(nums);
       
    };
  return (
    <>
    <div>
    <button onClick={addRandomNumber}>RandomGenerator</button>
    {
        number.map(item => <span style={{marginLeft:"10px"}}>{item}</span> )
    }
    </div>
    </>
  )
}