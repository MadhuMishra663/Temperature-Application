import React, { useEffect } from 'react';
import './css/Tempapp.css';
const TempApp = () => {
    const[city,setCity] = React.useState(null);
    const[search,setSearch] = React.useState('Mumbai');
    useEffect( ()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=819ac302b1a372b8cd20de976916736e`
           const res= await fetch(url);
        //    console.log(res);
        const resjson= await res.json();
        // console.log(resjson);
        setCity(resjson.main);
        }
        fetchApi();
    },[search])
  return (
    <>
    <div className='box'>
      <div className='input'>
        <input type="search" className='inputfield' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>

      </div>
      {!city ? (<p className='errorMessage'>No Data Found</p>) : (
        <div>
            <div className='info'>
    <div className='temp'>
       <h1 className='location'>
        
       <span class="material-symbols-outlined">
              thermostat
             </span>
             </h1>
             <h2>{search}</h2>
             </div>
            
            
    </div>
    <h2 className='showtemp'>{city.temp}°C</h2>
    <h6 className='temin-max'>Min : {city.temp_min}°C | Max : {city.temp_max}°C </h6>
        </div>
      )
      }
    
    </div>
    </>
  )
}

export default TempApp
