import React, { useState } from 'react'

export default function DivChange() {

    const [color,setcolor]=useState('');

    const changeColor=(e) => {
        setcolor(e.target.value);
    };

    const change=()=> {
        const div= document.getElementById('dcolor');
        div.style.backgroundColor=color;
    };
      
        return (
          <div>
            <input type="text" value={color} onChange={changeColor} />
            <button onClick={change}>Change Color</button>
            <div id="dcolor" style={{ width: '500px', height: '500px' }}></div>
          </div>
        );
      };