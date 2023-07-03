import React from 'react'
import IssueItem from './IssueItem'
import {useQuery} from '@tanstack/react-query'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const IssuesList = ({selectedLabel,setSelectedLabel}) => {

    const issuesQuery = useQuery(
        ["issues"],
        ()=>{
            return fetch('https://ui.dev/api/courses/react-query/issues')
            .then(res => res.json())
        }
        )
        
  return (
    <Grid>
        <Typography variant={'h2'}>Issues List</Typography>
        {issuesQuery.isLoading? 
        <Box sx={{ display: 'flex' }}>
           <CircularProgress />
        </Box>
        :
        <Grid>
          {issuesQuery.data.map( issue => 
            <IssueItem
                key={issue.id}
                title={issue.title}
                number={issue.number}
                assignee={issue.assignee}
                commentCount={issue.comments.length}
                createdBy={issue.createdBy}
                createdDate={issue.createdDate}
                labels={issue.labels}
                status={issue.status}
                selectedLabel={selectedLabel}
                setSelectedLabel={setSelectedLabel}
            />
            )}
        </Grid> 
        }
    </Grid>
  )
}

export default IssuesList