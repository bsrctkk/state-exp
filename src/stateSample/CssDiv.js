import React,{useState} from 'react'

export default function CssDiv() {
    const [backgroundColor, setBackgroundColor] = useState('');

  const Color = (color) => {
    setBackgroundColor(color);
  };

  return (<>
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
    <div>
        <button onClick={() => Color('green')}>green</button>
        <button onClick={() => Color('black')}>black</button>
        <button onClick={() => Color('blue')}>blue</button></div>
    <div style={{ backgroundColor:backgroundColor ,display:'flex', height:"500px", width:"500px"}}></div>
    </div>
    </>
  )
}