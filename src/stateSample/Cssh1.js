import React,{useState} from 'react'

export default function Cssh1() {
    const [fontSize, setfontSize] = useState('');

  const size = () => {
    const s= Math.floor(Math.random() * 100);
    setfontSize(s);
  };
  return (<>
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
    <div>
        <button onClick={size}>font size değiştir</button>
    </div>
    <h1 style={{fontSize:fontSize}}>Aloha Academy</h1>
    </div>
    </>
  )
}