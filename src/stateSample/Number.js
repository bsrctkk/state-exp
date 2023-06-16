import React, { useState } from 'react'

export default function Number() {
    let numberData=[10,5, 20, 18 ,3, 14]

    const [number, setnumber] = useState(numberData)

    const addRandomNumber = () => {
        const randomNum = Math.floor(Math.random() * 100);
        setnumber([...number, randomNum]);
    };

    const emptyRandom =() => {
        const randomNumber = Math.floor(Math.random() * number.length);
        const emptyRandom = [...number];
        emptyRandom.splice(randomNumber, 1);
        setnumber(emptyRandom);
    }

  return (<>
    <div class="d-grid gap-2">
      <button type="button" name="" id="" class="btn btn-primary" onClick={addRandomNumber}>ADD</button>
    </div>
    <div class="d-grid gap-2">
      <button type="button" name="" id="" class="btn btn-primary" onClick={()=> setnumber([])}>empty</button>
    </div>
    <div class="d-grid gap-2">
      <button type="button" name="" id="" class="btn btn-primary" onClick={emptyRandom}>emptyRandom</button>
    </div>
    <ul>{
        number.map(item => <li>{item}</li>)
    }</ul>
    </>
  )
}