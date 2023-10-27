import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:4000/api/v1'
//   baseURL: 'https://good-jade-betta-ring.cyclic.app'
})

export default instance
