import React,{useState} from 'react'

export default function ShowHide() {
    
    const [show, setShow] = useState(false);
    
    const onclick = () => {
        setShow(!show);
      };

      
  return (
    <>
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
    <button style={{display:'flex', height:"100px", width:"25%", alignItems:'center', justifyContent:'center'}} onClick={onclick}><h2>Göster/Gizle</h2></button>
    {show && <h1>Hello Aloha ACADEMY!</h1>}
  </div>
    </>
  );
}