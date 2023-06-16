import React, {useState} from 'react'

export default function Tempaturee() {

    const [temp, setTemp] = useState('');

    const [unit, setUnit] = useState('Celsius');

    const [convertTemp, setConvertTemp] = useState('');


  const convertTemperature = () => {
    if (unit === 'Celsius') {
      const celF = (parseFloat(temp) * 1.8) + 32;
      setConvertTemp(celF.toFixed(2) + '°F');
    }
    
    else if (unit === 'Fahrenheit') {
      const fahC = (parseFloat(temp) - 32) / 1.8;
      setConvertTemp(fahC.toFixed(2) + '°C');
    }
    
    else if (unit === 'Kelvin') {
      const celK = parseFloat(temp) + 273.15;
      setConvertTemp(celK.toFixed(2) + '°K');
    }
    
    else if (unit === 'KelvinC') {
      const kelC = parseFloat(temp) - 273.15;
      setConvertTemp(kelC.toFixed(2) + '°C');
    }
  };

  const tempChange = (e) => {
    const value = e.target.value;
    setTemp(value);
    convertTemperature();
  };

  const unitChange = (e) => {
    const value = e.target.value;
    setUnit(value);
    convertTemperature();
  };

  return (<>
    <div>
      <label>
        Temperature:
        <input type="number" value={temp} onChange={tempChange} />
      </label>
      <br />
      <label>
        Unit:
        <select value={unit} onChange={unitChange}>
          <option value="Celsius">Celsius-Fahrenheit</option>
          <option value="Fahrenheit">Fahrenheit-Celsius</option>
          <option value="KelvinC">Celsius-Kelvin</option>
          <option value="Kelvin">Kelvin-Celsius</option>
        </select>
      </label>
      <br />
      <h3>Convert Temperature: {convertTemp}</h3>
    </div>
    </>
  );
  
}