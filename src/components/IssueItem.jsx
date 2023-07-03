import React from 'react'
import { relativeDate } from '../helper/relativeDate';
import useUserData from '../helper/useUserData'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

import { Grid, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LabelItem from './LabelItem';


const IssueItem = ({
    title,
    number,
    assignee,
    commentCount,
    createdBy,
    createdDate,
    labels,
    status,
    selectedLabel,
    setSelectedLabel}) => {

      const relativeCreatedDate = relativeDate(createdDate)
      const assigneeUser = useUserData(assignee)
      const createdByUser = useUserData(createdBy)
      

  
  return (
    
        <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 512,
          height:'auto'
        },
        
      }}
    >
      <Paper 
      variant='outlined'
      sx={{
        '&:hover':{
            cursor:'pointer',
            elevation:'4',
        }
      }}>
        <Grid
        container
        display={'flexBox'}
        flexDirection={'row'}
        height={128}
        alignItems={'center'}
        
        >
            <Grid
            item
            xs={1}
            width={64}>
                {status === 'done' || status === 'cancelled'?
                    <CheckCircleOutlineIcon sx={{color:'red'}}/>
                    :<ErrorOutlineIcon sx={{color:'green'}}/>
                }
            </Grid>
            <Grid
            item
            alignItems={'space-evenly'}
            xs={8}>
              <Typography 
              variant='body1'
              sx={{
                fontWeight:'bold',
                color:'gold',
                
              }}
              >
                {title}
                
                <LabelItem 
                label={labels[0]}
                selectedLabel={selectedLabel}
                setSelectedLabel={setSelectedLabel}/>
                
              </Typography>
              
              <Typography
              variant='subtitle'
              sx={{
                fontWeight:'light',
                bottom:0,
                fontSize:'.75 rem',
                color:'#aaa'
              }}>
                {`#${number} opened ${relativeCreatedDate}`}{createdByUser.isSuccess?` by ${createdByUser.data.name}`:''}
              </Typography>
            </Grid>
            <Grid
            item
            xs={1.5}>
              {createdByUser.isSuccess?
              <Avatar alt={createdByUser.data.name} src={createdByUser.data.profilePictureUrl} />
            :''}
            </Grid>
            <Grid
            item
            fontWeight={'light'}
            color={'#aaa'}
            xs={1.5}>
              {commentCount>0?<>{commentCount}<ChatBubbleOutlineIcon/></>: null}
            </Grid>
        </Grid>
      </Paper>
      
    </Box>
    
  )
}

export default IssueItem