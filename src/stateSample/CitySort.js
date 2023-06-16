import React, {useState} from 'react'

export default function CitySort() {
    const [citiesData, setCitiesData] = useState([
        'Eskişehir',
        'İstanbul',
        'Ankara',
        'İzmir',
        'Trabzon',
      ]);
      const [Ascending, setAscending] = useState(true);
    
      const sort = () => {
        const sortedCities = [...citiesData].sort();
        if (!Ascending) {
          sortedCities.reverse();
        }
        setCitiesData(sortedCities);
        setAscending(!Ascending);
      };

  return (<>
    <div>
    <button onClick={sort}>SORT</button>
    <ul>
        {
            citiesData.map(item => <li>{item}</li>)
        }
        </ul>
    </div>
        </>
  )
}