import axios from 'axios'

const url = "https://covid-19.mathdro.id/api"

export type data = {
    confirmed:number,
    recovered:number,
    deaths:number,
    lastUpdate:string
}

export const fetchCountries = async() => {
    try{
        const response = await axios.get(`${url}/countries`)
        return response.data.countries.map((country:any)=>country.name)
    }catch(err){
        console.log(err)
    }
}

export const fetchDailyData = async()=>{
    try{
        const {data} = await axios.get(`${url}/daily`)
        const modifiedData = data.map((dailyData:any)=>{
            return {
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate
            }
        })
        return modifiedData
    }catch(err){
        console.log(err)
    }
}

export const fetchCoutryData = async(country: string)=>{
    let changableUrl = url
    if(country){
        changableUrl = `${url}/countries/${country}`
    }
    try {
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changableUrl)
        
        const modifiedData : data = {
            confirmed:confirmed.value,
            recovered:recovered.value,
            deaths:deaths.value,
            lastUpdate:lastUpdate
        }
        return modifiedData
    }catch(err){
        console.log(err)
    }
}