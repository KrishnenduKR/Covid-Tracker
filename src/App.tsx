import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './images/logo.jpeg'
import Cards from './components/cards/Cards'
import CountryPicker from './components/coutryPicker/CountryPicker';
import { fetchCoutryData, data } from './api';
import Chart from './components/chart/Chart';

function App() {
  const [state,setState] = useState<{data:data,country:string}>({
    data:{
      confirmed: 0,
      recovered: 0,
      deaths: 0,
      lastUpdate: ""
    },
    country: ""
  })

  useEffect(()=>{
    const mount = async()=>{
      const initialData = await fetchCoutryData("")
      if(initialData){
        setState({
          data: initialData,
          country: ""
        })
      }
    }
    mount()
  },[])

  const handleChange = async(country:string)=> {
    const countryData = await fetchCoutryData(country)
    if(countryData){
      setState({
        country: country,
        data: countryData
      })
    }
  }

  const {data,country} = state
  return (
    <div className="App">
      <img src={logo} alt='logo' className='logo'></img>
      <Cards data={data}></Cards>
      <CountryPicker handleChange={handleChange}></CountryPicker>
      <Chart data={data} country={country}></Chart>
    </div>
  );
}

export default App;
