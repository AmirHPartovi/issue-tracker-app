import { useQuery } from "@tanstack/react-query"

export default function useLabelsData(){
    const labelsQuery = useQuery(
        ["labels"],
        ()=>fetch('https://ui.dev/api/courses/react-query/labels')
        .then(res => res.json())
    
    
    )
    return labelsQuery
}