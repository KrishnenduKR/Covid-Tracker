import React, { useEffect, useState } from 'react';
import { data, fetchDailyData } from '../../api';
import styles from './Chart.module.css'
import {Line,Bar} from 'react-chartjs-2'
import {Chart as ChartJS,LineElement,PointElement,
LinearScale,Title,Tooltip,Legend,CategoryScale,BarElement} from 'chart.js'

ChartJS.register(LineElement,PointElement,LinearScale,BarElement,Title,Tooltip,Legend,CategoryScale)

interface IChartProps {
    data: data,
    country: string
}

const Chart = ({data,country}:IChartProps) => {
    const [dailyData,setDailyData] = useState([])
    useEffect(()=>{
        const fetchAPI = async()=>{
            const dailyData = await fetchDailyData()
            setDailyData(dailyData)
        }
        if(!country){
            fetchAPI()
        }
    },[])

    const lineChart = (
        dailyData.length ? (
            <Line 
            data={{
                labels: dailyData.map(({date})=>date),
                datasets: [
                    {
                        data: dailyData.map(({confirmed})=>confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true
                    },
                    {
                        data: dailyData.map(({deaths})=>deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        fill: true
                    }
                ]
            }}
            ></Line>
        ) : null
    )

    const barChart = (
        data.confirmed ? (
            <Bar
            data={{
                labels: ['Infected','Recovered','Deaths'],
                datasets: [
                    {
                        label: 'People',
                        backgroundColor : [
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)',
                        ],
                        data: [data.confirmed,data.recovered,data.deaths]
                    },
                ]
            }}
            />
        ) : null
    )
  return <div className={styles.container}>
      {
          country ? barChart : lineChart
      }
  </div>;
};

export default Chart;
