import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:4000/';
axios.defaults.baseURL = 'https://agility.shanthasdesigns.com/';
axios.defaults.withCredentials = true;
let refresh = false;
axios.interceptors.response.use(resp => resp, async error => {
  console.log(error.response.status);
  if(error.response.status === 401 && !refresh) {
    refresh = true;
    const response = await axios.post('refresh', {});

    if(response.status === 200 ) {
      return axios(error.config)
    }
  }
  refresh = false;
  return error;
})