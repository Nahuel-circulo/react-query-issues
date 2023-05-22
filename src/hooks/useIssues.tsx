import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../api/githubApi"
import { Issue } from "../interfaces/issue"

const getIssues = async (): Promise<Issue[]> => {

  const { data } = await githubApi.get<Issue[]>('/issues')
  console.log('issues ',data);
  return data
}



export const useIssues = () => {

  const issuesQuery = useQuery(['issues'], getIssues)


  return {
    issuesQuery
  }
}

