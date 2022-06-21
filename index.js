const axios = require('axios');

const url = "http://202.165.24.140:1337/jpns?jenis=pengumuman"
//axios.get(url,params)
axios.get(url)
.then(res => {
    console.log(res)
})
.catch(err => {
    console.error(err); 
})