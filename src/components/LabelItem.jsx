import React from 'react'
import { Button } from '@mui/material'
import useLabelsData from '../helper/useLabelsData'
const LabelItem =  ({label, selectedLabel,setSelectedLabel}) => {
    const labelsQuery = useLabelsData()
    const handleClick =(labelName)=>{
        setSelectedLabel(labelName)
    }

    if(labelsQuery.isLoading) return null
    if(typeof(label)==='string'){
      label = labelsQuery.data.find(item=>item?.id===label)
       
    }
  return (
    <Button
        variant={selectedLabel === label.name ? 'contained' : 'outlined'}
        onClick={() => handleClick(label.name)}
        sx={{
            bgcolor: (selectedLabel === label.name) ? `${label.color}` : 'black',
            color: (selectedLabel === label.name) ? 'black' : `${label.color}`,
            borderColor: (selectedLabel === label.name) ? 'black' : `${label.color}`,
            fontWeight: (selectedLabel === label.name) ? 'bold' : 'regular',
            borderRadius: '24px',
            fontSize: '.7rem',
            margin: '6px',
            padding: '4px'
        }}>
        {label.name}
    </Button>
  )
}

export default LabelItem