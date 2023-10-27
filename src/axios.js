import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://nour-al-dunya-api.onrender.com'
//   baseURL: 'https://good-jade-betta-ring.cyclic.app'
})

export default instance
