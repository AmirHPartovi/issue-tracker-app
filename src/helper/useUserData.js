import { useQuery } from "@tanstack/react-query";

export default function useUserData(userID){
    const userData = useQuery(
        ["users",userID],
        ()=>{
            return fetch(`https://ui.dev/api/courses/react-query/users/${userID}`)
            .then(res => res.json())
        }
    )
    return userData
}