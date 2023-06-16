import React,{useState,useEffect} from 'react'

export default function Tempature() {

    const [temp, setTemp] = useState('');
    const [unit, setUnit] = useState('Celsius');
    const [convertTemp, setConvertTemp] = useState('');
  
    useEffect(() => {
      const convertTemperature = () => {
        if (unit === 'Celsius') {
            const celF = (parseFloat(temp) * 1.8) + 32;
          setConvertTemp(celF.toFixed(2) + '°F');
        } else if (unit === 'Fahrenheit') {
            const fahC = (parseFloat(temp) - 32) / 1.8;
          setConvertTemp(fahC.toFixed(2) + '°C');
        } else if(unit === 'Kelvin') {
            const celK = parseFloat(temp)+ 273.15;
            setConvertTemp(celK.toFixed(2) + '°K')
        } else if(unit === 'KelvinC') {
            const kelC = parseFloat(temp) - 273.15;
            setConvertTemp(kelC.toFixed(2) + '°C')
        }
      };
    convertTemperature();
    }, 
    [temp, unit]);


  return (<>
    <div>
      <label>Temperature: <input type="number" value={temp} onChange={(e) => setTemp(e.target.value)}/></label>
      <br />
      <label>Unit: <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="Celsius">Celsius-Fahrenheit</option>
          <option value="Fahrenheit">Fahrenheit-Celcius</option>
          <option value="Kelvin">Celcius-Kelvin</option>
          <option value="KelvinC">Kelvin-Celcius</option>
        </select></label>
      <br />
      <h3>Convert Temperature: {convertTemp}</h3>
    </div>
    </>
  );
  
}