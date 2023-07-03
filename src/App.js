import { useQuery } from "@tanstack/react-query";
import IssuesList from "./components/IssuesList";
import Labels from "./components/Labels";
import { Grid, Typography,Box } from "@mui/material";
import { useState } from "react";



// const fetchUser=(username)=>{
//   return fetch(`https://api.github.com/users/${username}`)
//   .then(res => res.json())
// }
// const GithubUser = ({username}) =>{
//   const userQuery =useQuery(
//     ["username"],
//     ()=> fetchUser(username)
//   )
//   const data = userQuery.data
//   if(userQuery.isLoading) return <p> Loading ... </p>
  
//   if(userQuery.isError) return <p>Error : {userQuery?.error?.message}</p>

//   return <pre>{JSON.stringify(data,null,2)}</pre>
// }

function App() {
  const [selectedLabel , setSelectedLabel]=useState('')
  return (
    <>
    <Box>
      <Typography variant="h1" textAlign={'center'}>
        Issue Tracker
      </Typography>
    </Box>
    <Grid
    container
    justifyContent={'center'}
    >
        <Grid
        item
        md={6}>
        <IssuesList selectedLabel={selectedLabel}setSelectedLabel={setSelectedLabel}/>
        </Grid>
        <Grid
        item
        md={3}>
          <Typography variant="h2">
            Labels
          </Typography>
          <Labels selectedLabel={selectedLabel}  setSelectedLabel={setSelectedLabel}/>
        </Grid>
    </Grid>
    </>
  );
}

export default App;
