import React, { useEffect, useState } from 'react';
import {NativeSelect,FormControl} from '@mui/material'
import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../api';

interface ICoutryPIckerProps{
    handleChange : Function
}

const CountryPicker = ({handleChange}:ICoutryPIckerProps) => {
    const [fetchedCountries,setFetchedCountries] = useState<string[]>([])
    useEffect(()=>{
        const fetchAPI = async()=>{
            const countries = await fetchCountries()
            setFetchedCountries(countries)
        }
        fetchAPI()
    },[])

  return <div>
      <FormControl className={styles.formControl} >
        <NativeSelect defaultValue="" onChange={(e)=>handleChange(e.target.value)}>
            <option value="">Global</option>
            {
                fetchedCountries.map((country,index)=>{
                    return <option key={index} value={country}>{country}</option>
                })
            }
        </NativeSelect>
      </FormControl>
  </div>;
};

export default CountryPicker;
