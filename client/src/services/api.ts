import axios from 'axios'

export default axios.create({
  withCredentials:  true,
  baseURL: 'https://y5x2xfpy9b.execute-api.us-east-1.amazonaws.com/dev',
})
