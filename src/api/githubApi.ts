import axios from 'axios';

export const githubApi = axios.create({
  baseURL:'https://api.github.com/repos/facebook/react',
  headers:{
   // Authorization:'Bearer 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'
  }
})