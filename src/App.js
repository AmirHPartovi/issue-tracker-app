import { useQuery } from "@tanstack/react-query";

const fetchUser=(username)=>{
  return fetch(`https://api.github.com/users/${username}`)
  .then(res => res.json())
}
const GithubUser = (username) =>{
  const userQuery =useQuery(
    ["username"],
    ()=> fetchUser(username)
  )
  const data = userQuery.data
  if(userQuery.isLoading) return <p> Loading ... </p>
  
}

function App() {
  return (
    <div>
        <GithubUser username={'uidotdev'}/>
    </div>
  );
}

export default App;
