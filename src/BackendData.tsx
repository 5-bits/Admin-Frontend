import axios from 'axios'

const backendUser = axios({
    method: 'get',
    url: 'http://localhost:3200/fetch/user',
    responseType: 'json'
})
.then( res => res.data)


export default backendUser.then;