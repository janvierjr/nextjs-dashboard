import React from 'react'
import {Grid, IconButton, Paper, Typography, Tooltip } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import scss from './DataCard.module.scss';

export type  DataCardProps = {
  title: string;
  value: string;
  description: string;
}

const DataCard = (props: DataCardProps) => {
  const { title = 'no title', value = 'no value', description ='description N/A' } = props;
  return (
    <Paper
      className={scss.dataCard} >
      <div className={scss.header} >
          <Typography fontSize={'h6'} color={'lightslategrey'}>
            {title}
          </Typography>
          <Tooltip
            title={
            <Typography fontSize={16}>{`${description} which is ${value}`}</Typography>
          }
          >
            <IconButton>
              <InfoOutlinedIcon />
            </IconButton>
          </Tooltip>
        </div>
      <Typography fontSize={'h6'}>{value}</Typography>
      </Paper>
  )
}

export default DataCard;