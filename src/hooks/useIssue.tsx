import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../api/githubApi";
import { Issue } from "../interfaces/issue";
import { sleep } from "../helpers/sleep";

const getIssueInfo = async (issueNumber: number): Promise<Issue> => {
  await sleep(2)
  const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`)
  console.log(data);
  return data
}


export const useIssue = (issueNumber: number) => {


  const issueQuery = useQuery(
    ['issue', issueNumber],
    () => getIssueInfo(issueNumber)
  )


  return {
    issueQuery
  }

}
