import React from 'react';
import {Grid, Card as CustomCard,CardContent,Typography} from '@mui/material'
import cx from 'classnames'
import CountUp from 'react-countup'

interface ICardProps {
    className1 : string,
    className2 : string,
    cardTitle : string,
    totalNumber : number,
    lastUpdated : string,
    body : string
}

const Card = ({className1,
    className2 ,
    cardTitle,
    totalNumber,
    lastUpdated,
    body} : ICardProps) => {
  return <Grid item xs={12} md={3}>
      <CustomCard className={cx(className1,className2)} >
        <CardContent>
            <Typography color="textSecondary" >{cardTitle}</Typography>
            <Typography variant="h5" >
              <CountUp end={totalNumber} duration={3} separator=','/>
            </Typography>
            <Typography color="textSecondary" >{lastUpdated}</Typography>
            <Typography variant="body2" >{body}</Typography>
        </CardContent>
      </CustomCard>
  </Grid>
};

export default Card;
