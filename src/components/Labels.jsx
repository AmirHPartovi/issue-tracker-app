import { Grid,Button } from '@mui/material'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import useLabels from '../helper/useLabelsData'
import LabelItem from './LabelItem'
const Labels = ({selectedLabel , setSelectedLabel}) => {
    const labelsQuery = useLabels()
    
  return (
    <Grid>
       {labelsQuery.isLoading?
       <p> Loading ... </p>
       :
       <>
       {labelsQuery.data.map(label=>
        <LabelItem key={label.id} label={label} selectedLabel={selectedLabel} setSelectedLabel={setSelectedLabel} />)}
       </>
       } 
    </Grid>
  )
}

export default Labels

