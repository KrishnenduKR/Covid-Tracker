import React from 'react';
import styles from './Cards.module.css'
import {Grid} from '@mui/material'
import Card from '../card/Card'
import {data} from '../../api'

interface ICardsProps {
    data: data
}
const Cards = ({data}:ICardsProps) => {
    if(!data.confirmed){
        return <h2>Loading.....</h2>
    }
  return <div className={styles.container}>
      <Grid container spacing={3} justifyContent='center' >
        <Card 
        className1={styles.card} 
        className2={styles.infected} 
        cardTitle="Infected" 
        totalNumber={data.confirmed} 
        lastUpdated={new Date(data.lastUpdate).toDateString()} 
        body="Number of active cases of COVID-19"></Card>
        <Card 
        className1={styles.card} 
        className2={styles.recovered} 
        cardTitle="Recovered" 
        totalNumber={data.recovered} 
        lastUpdated={new Date(data.lastUpdate).toDateString()} 
        body="Number of recoveries from COVID-19"></Card>
        <Card 
        className1={styles.card} 
        className2={styles.death} 
        cardTitle="Death" 
        totalNumber={data.deaths} 
        lastUpdated={new Date(data.lastUpdate).toDateString()} 
        body="Number of deaths caused by COVID-19"></Card>
        </Grid>
      </div>;
};

export default Cards;
